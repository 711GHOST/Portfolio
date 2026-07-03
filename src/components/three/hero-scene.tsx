"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Icosahedron,
  Torus,
  Stars,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * The glowing distorted AI core at the heart of the hero - reacts subtly to
 * time and drifts on its own.
 */
function AICore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[1.35, 4]}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#0a5b8f"
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.9}
          distort={0.4}
          speed={2.2}
          transparent
          opacity={0.92}
        />
      </Icosahedron>
    </Float>
  );
}

/**
 * Orbiting energy rings around the core.
 */
function OrbitRings() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.z = t * 0.1;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
  });

  const rotations = useMemo<[number, number, number][]>(
    () => [
      [Math.PI / 2, 0, 0],
      [Math.PI / 3, Math.PI / 4, 0],
      [-Math.PI / 4, Math.PI / 3, 0],
    ],
    []
  );

  return (
    <group ref={groupRef}>
      {rotations.map((rotation, i) => (
        <Torus
          key={i}
          args={[2.4 + i * 0.35, 0.008, 16, 120]}
          rotation={rotation}
        >
          <meshBasicMaterial
            color={i % 2 === 0 ? "#a855f7" : "#22d3ee"}
            transparent
            opacity={0.6}
          />
        </Torus>
      ))}
    </group>
  );
}

/**
 * A drifting cloud of neon particles surrounding the core.
 */
function ParticleCloud({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#67e8f9"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />
      <Suspense fallback={null}>
        <AICore />
        <OrbitRings />
        <ParticleCloud />
        <Stars
          radius={80}
          depth={50}
          count={2500}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Suspense>
    </>
  );
}

/**
 * The full hero canvas. Mounted client-side only (dynamic import in Hero).
 * dpr is capped for performance on high-density displays.
 */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <SceneContents />
    </Canvas>
  );
}
