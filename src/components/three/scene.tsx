"use client";

import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Particles, FloatingShapes } from "./particles";

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Particles count={600} />
      <FloatingShapes />
      <Preload all />
    </>
  );
}

interface SceneProps {
  className?: string;
}

export function Scene({ className }: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Lazy loaded version for code splitting
export const LazyScene = lazy(() =>
  import("./scene").then((mod) => ({ default: mod.Scene }))
);
