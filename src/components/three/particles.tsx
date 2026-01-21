"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
}

export function Particles({ count = 500 }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color("#6366f1"); // Primary
    const color2 = new THREE.Color("#8b5cf6"); // Accent

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Spread particles in a sphere
      const radius = Math.random() * 10 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Interpolate between colors
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return geo;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Slow rotation
    mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;

    // Mouse interaction
    const { x, y } = state.pointer;
    mesh.current.rotation.y += x * 0.01;
    mesh.current.rotation.x += y * 0.01;
  });

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Floating Icosahedrons */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingShape
          key={i}
          position={[
            Math.sin(i * 0.8) * 6,
            Math.cos(i * 0.8) * 4 - 2,
            Math.sin(i * 0.5) * 4 - 8,
          ]}
          scale={0.3 + Math.random() * 0.4}
          rotationSpeed={0.5 + Math.random() * 0.5}
          floatSpeed={1 + Math.random()}
          floatRange={0.5 + Math.random() * 0.5}
          type={i % 3 === 0 ? "icosahedron" : i % 3 === 1 ? "octahedron" : "dodecahedron"}
        />
      ))}
    </group>
  );
}

interface FloatingShapeProps {
  position: [number, number, number];
  scale: number;
  rotationSpeed: number;
  floatSpeed: number;
  floatRange: number;
  type: "icosahedron" | "octahedron" | "dodecahedron";
}

function FloatingShape({
  position,
  scale,
  rotationSpeed,
  floatSpeed,
  floatRange,
  type,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed;
    meshRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 0.5;
    meshRef.current.position.y =
      initialY + Math.sin(state.clock.elapsedTime * floatSpeed) * floatRange;
  });

  const Geometry = () => {
    switch (type) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <Geometry />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}
