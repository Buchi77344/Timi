"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODES: [number, number, number][] = [
  [1.6, 0, 0],
  [-1.6, 0, 0],
  [0, 1.6, 0],
  [0, -1.6, 0],
  [0, 0, 1.6],
  [0, 0, -1.6],
];

function DraftedForm() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.18;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, pointer.y * 0.25, 0.04);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, -pointer.x * 0.15, 0.04);
  });

  return (
    <group ref={group}>
      {/* wireframe hull — the "structure" */}
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#6fa3cf" wireframe transparent opacity={0.85} />
      </mesh>

      {/* faint fill so it reads as a solid, not just lines */}
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#17436e" transparent opacity={0.06} />
      </mesh>

      {/* brass nodes at key vertices — the "pinned" data points */}
      {NODES.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color="#b9812f" />
        </mesh>
      ))}
    </group>
  );
}

function GridFloor() {
  return (
    <gridHelper
      args={[8, 16, "#6fa3cf", "#17436e"]}
      position={[0, -2.1, 0]}
    />
  );
}

function StaticFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 200 200" className="h-3/4 w-3/4 opacity-60" aria-hidden="true">
        <polygon
          points="100,20 180,70 180,140 100,180 20,140 20,70"
          fill="none"
          stroke="#6fa3cf"
          strokeWidth="1"
        />
        <circle cx="100" cy="20" r="3" fill="#b9812f" />
        <circle cx="180" cy="70" r="3" fill="#b9812f" />
        <circle cx="20" cy="70" r="3" fill="#b9812f" />
      </svg>
    </div>
  );
}

export default function BlueprintScene() {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Deliberate mount guard: gates the WebGL Canvas behind a mounted flag so
    // the server render and first client paint both output the same empty
    // placeholder, avoiding a hydration mismatch for the animated scene.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-full w-full" />;
  if (reducedMotion) return <StaticFallback />;

  return (
    <Canvas
      camera={{ position: [0, 0.6, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <DraftedForm />
      <GridFloor />
    </Canvas>
  );
}