'use client';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame, type ThreeEvent } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Html, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RapierRigidBody,
  type RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}

const CARD_GLB = '/lanyard/card.glb';
const DEFAULT_LANYARD = '/lanyard/lanyard.png';

// 1x1 transparent pixel — lets useTexture be called unconditionally when a
// front/back image isn't supplied.
const BLANK_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// The card model's front face is UV-mapped to the LEFT half of the texture
// atlas and the back face to the RIGHT half (measured from card.glb). Each
// custom image is composited into its own half so the two faces render
// independently, aspect-preserving (no stretching).
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

export interface BadgeProfile {
  name: string;
  role: string;
  detail?: string;
  mark?: string;
}

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: 'cover' | 'contain';
  lanyardImage?: string | null;
  lanyardWidth?: number;
  cardScale?: number;
  ropeLength?: number;
  anchorPosition?: [number, number, number];
  badgeProfile?: BadgeProfile | null;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1,
  cardScale = 2.25,
  ropeLength = 1,
  anchorPosition = [0, 4, 0],
  badgeProfile = null
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState<boolean>(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper" aria-label="Crachá 3D interativo de Higor Wilvert">
      <Canvas
        camera={{ position, fov }}
        dpr={isMobile ? [1.25, 1.75] : [1.5, 2]}
        gl={{ alpha: transparent, antialias: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
          gl.toneMappingExposure = 0.85;
        }}
      >
        <ambientLight intensity={0.55} />
        <Suspense
          fallback={
            <Html center>
              <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.16em] text-forest/55">
                Preparando 3D
              </span>
            </Html>
          }
        >
          <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
            <Band
              isMobile={isMobile}
              frontImage={frontImage}
              backImage={backImage}
              imageFit={imageFit}
              lanyardImage={lanyardImage}
              lanyardWidth={lanyardWidth}
              cardScale={cardScale}
              ropeLength={ropeLength}
              anchorPosition={anchorPosition}
              badgeProfile={badgeProfile}
            />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer
              intensity={1.15}
              color="#f5f0e6"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={0.45}
              color="#f5f0e6"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={0.65}
              color="#c9a86c"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={1.35}
              color="#f5f0e6"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: 'cover' | 'contain';
  lanyardImage?: string | null;
  lanyardWidth?: number;
  cardScale?: number;
  ropeLength?: number;
  anchorPosition?: [number, number, number];
  badgeProfile?: BadgeProfile | null;
}

type LanyardRigidBody = RapierRigidBody & {
  lerped?: THREE.Vector3;
};

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1,
  cardScale = 2.25,
  ropeLength = 1,
  anchorPosition = [0, 4, 0],
  badgeProfile = null
}: BandProps) {
  const band = useRef<THREE.Mesh<InstanceType<typeof MeshLineGeometry>, InstanceType<typeof MeshLineMaterial>>>(null!);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<LanyardRigidBody>(null!);
  const j2 = useRef<LanyardRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);

  const cardHalfWidth = 0.35821 * cardScale;
  const cardHalfHeight = 0.5 * cardScale;
  const cardVisualOffsetY = -0.522905 * cardScale;
  const cardJointY = 0.657 * cardScale;
  const chainStep = ropeLength * 0.78;

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: RigidBodyProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  const getLerped = (body: LanyardRigidBody): THREE.Vector3 => {
    if (!body.lerped) {
      body.lerped = new THREE.Vector3().copy(body.translation());
    }

    return body.lerped;
  };

  const { nodes, materials } = useGLTF(CARD_GLB) as any;
  const texture = useTexture(lanyardImage || DEFAULT_LANYARD);
  // useTexture must be called unconditionally; use a blank pixel when an image
  // isn't supplied for a given face, then skip compositing it below.
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  // Composite the front/back images into the card's texture atlas (front = left
  // half, back = right half). Each image is drawn aspect-preserving (no stretch).
  const cardMap = useMemo(() => {
    const baseMap = materials.base.map as THREE.Texture;
    if (!frontImage && !backImage && !badgeProfile) return baseMap;

    const baseImg = baseMap.image as any;
    const W = baseImg.width;
    const H = baseImg.height;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return baseMap;
    // Keep the original baked atlas for the card edges and any untouched face.
    ctx.drawImage(baseImg, 0, 0, W, H);

    const drawFitted = (img: any, rect: typeof FRONT_UV_RECT) => {
      const rx = rect.x * W;
      const ry = rect.y * H;
      const rw = rect.w * W;
      const rh = rect.h * H;
      const pick = imageFit === 'contain' ? Math.min : Math.max;
      const scale = pick(rw / img.width, rh / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = rx + (rw - dw) / 2;
      const dy = ry + (rh - dh) / 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };

    const drawProfileBadge = (img: any, profile: BadgeProfile) => {
      const rx = FRONT_UV_RECT.x * W;
      const ry = FRONT_UV_RECT.y * H;
      const rw = FRONT_UV_RECT.w * W;
      const rh = FRONT_UV_RECT.h * H;
      const headerHeight = rh * 0.1;
      const photoY = ry + headerHeight;
      const photoHeight = rh * 0.55;
      const infoY = photoY + photoHeight;

      ctx.fillStyle = '#f5f0e6';
      ctx.fillRect(rx, ry, rw, rh);
      ctx.fillStyle = '#1a3d1a';
      ctx.fillRect(rx, ry, rw, headerHeight);
      ctx.fillStyle = '#c9a86c';
      ctx.fillRect(rx, ry + headerHeight - Math.max(4, rh * 0.009), rw, Math.max(4, rh * 0.009));

      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, photoY, rw, photoHeight);
      ctx.clip();
      const photoScale = Math.max(rw / img.width, photoHeight / img.height);
      const photoWidth = img.width * photoScale;
      const fittedHeight = img.height * photoScale;
      ctx.drawImage(
        img,
        rx + (rw - photoWidth) / 2,
        photoY + (photoHeight - fittedHeight) / 2,
        photoWidth,
        fittedHeight
      );
      ctx.restore();

      ctx.fillStyle = '#f5f0e6';
      ctx.fillRect(rx, infoY, rw, ry + rh - infoY);
      ctx.fillStyle = '#c9a86c';
      ctx.fillRect(rx, infoY, rw, Math.max(5, rh * 0.012));

      const padding = rw * 0.075;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      ctx.fillStyle = '#f5f0e6';
      ctx.font = `700 ${Math.round(rh * 0.032)}px Arial, sans-serif`;
      ctx.fillText(profile.mark || 'HW / PORTFOLIO', rx + padding, ry + headerHeight * 0.48, rw - padding * 2);

      ctx.fillStyle = '#1a2744';
      ctx.font = `700 ${Math.round(rh * 0.057)}px Arial, sans-serif`;
      ctx.fillText(profile.name.toUpperCase(), rx + padding, infoY + rh * 0.105, rw - padding * 2);
      ctx.fillStyle = '#2d5a3d';
      ctx.font = `600 ${Math.round(rh * 0.03)}px Arial, sans-serif`;
      ctx.fillText(profile.role.toUpperCase(), rx + padding, infoY + rh * 0.17, rw - padding * 2);

      if (profile.detail) {
        ctx.fillStyle = '#1a2744';
        ctx.globalAlpha = 0.62;
        ctx.font = `500 ${Math.round(rh * 0.023)}px Arial, sans-serif`;
        ctx.fillText(profile.detail, rx + padding, infoY + rh * 0.225, rw - padding * 2);
        ctx.globalAlpha = 1;
      }

      const bx = BACK_UV_RECT.x * W;
      const by = BACK_UV_RECT.y * H;
      const bw = BACK_UV_RECT.w * W;
      const bh = BACK_UV_RECT.h * H;
      ctx.fillStyle = '#1a2744';
      ctx.fillRect(bx, by, bw, bh);
      ctx.fillStyle = '#c9a86c';
      ctx.fillRect(bx, by, Math.max(8, bw * 0.025), bh);
      ctx.textAlign = 'center';
      ctx.fillStyle = '#f5f0e6';
      ctx.font = `700 ${Math.round(bh * 0.17)}px Arial, sans-serif`;
      ctx.fillText('HW', bx + bw / 2, by + bh * 0.42);
      ctx.fillStyle = '#c9a86c';
      ctx.fillRect(bx + bw * 0.2, by + bh * 0.52, bw * 0.6, Math.max(5, bh * 0.009));
      ctx.fillStyle = '#f5f0e6';
      ctx.font = `600 ${Math.round(bh * 0.035)}px Arial, sans-serif`;
      ctx.fillText('DESENVOLVEDOR FULL STACK', bx + bw / 2, by + bh * 0.61, bw * 0.8);
      ctx.globalAlpha = 0.65;
      ctx.font = `500 ${Math.round(bh * 0.026)}px Arial, sans-serif`;
      ctx.fillText('higorwilvert.dev', bx + bw / 2, by + bh * 0.7, bw * 0.8);
      ctx.globalAlpha = 1;
    };

    if (badgeProfile && frontTex.image) {
      drawProfileBadge(frontTex.image, badgeProfile);
    } else {
      if (frontImage && frontTex.image) drawFitted(frontTex.image, FRONT_UV_RECT);
      if (backImage && backTex.image) drawFitted(backTex.image, BACK_UV_RECT);
    }

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.generateMipmaps = true;
    composite.minFilter = THREE.LinearMipmapLinearFilter;
    composite.magFilter = THREE.LinearFilter;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map, badgeProfile]);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], ropeLength]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], ropeLength]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], ropeLength]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, cardJointY, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        const lerped = getLerped(ref.current);
        const clampedDistance = Math.max(0.1, Math.min(1, lerped.distanceTo(ref.current.translation())));
        lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(getLerped(j2.current));
      curve.points[2].copy(getLerped(j1.current));
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true);
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={anchorPosition}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[chainStep, 0, 0]} ref={j1} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[chainStep * 2, 0, 0]} ref={j2} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[chainStep * 3, 0, 0]} ref={j3} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[chainStep * 3, -cardJointY, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[cardHalfWidth, cardHalfHeight, 0.02]} />
          <group
            scale={cardScale}
            position={[0, cardVisualOffsetY, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: ThreeEvent<PointerEvent>) => {
              (e.target as Element).releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: ThreeEvent<PointerEvent>) => {
              (e.target as Element).setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                emissive="#ffffff"
                emissiveMap={cardMap}
                emissiveIntensity={0.65}
                clearcoat={isMobile ? 0.04 : 0.08}
                clearcoatRoughness={0.8}
                roughness={0.84}
                metalness={0}
                envMapIntensity={0.4}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#f5f0e6"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}

useGLTF.preload(CARD_GLB);
