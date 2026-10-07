"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.18;
      ref.current.rotation.y += delta * 0.28;
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.35}
      floatIntensity={0.8}
    >
      <Sphere ref={ref} args={[1.15, 48, 48]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#3b0764"
          emissiveIntensity={1.8}
          metalness={0.55}
          roughness={0.2}
          wireframe
        />
      </Sphere>

      <Sphere args={[0.68, 32, 32]}>
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#075985"
          emissiveIntensity={1.4}
          metalness={0.7}
          roughness={0.18}
        />
      </Sphere>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <div
      className="h-[360px] w-full sm:h-[440px]"
      aria-label="Interactive Build Orbit visualization"
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.35} />

        <pointLight
          position={[3, 3, 4]}
          intensity={18}
          color="#c4b5fd"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={10}
          color="#38bdf8"
        />

        <Stars
          radius={18}
          depth={8}
          count={900}
          factor={2.2}
          saturation={0}
          fade
          speed={0.35}
        />

        <Core />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
        />
      </Canvas>
    </div>
  );
}