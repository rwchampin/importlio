"use client";

// import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
export default function CustomCanvas({ children }: any) {
  return (
    <div className="ui-canvas">
      <Canvas
        shadows="soft"
        dpr={[1, 2]}
        style={{ height: "100vh", width: "100vw" }}

        // camera={{ position: [0, 0, 0], fov: 34, near: 0.1, far: 500 }}
      >
        {/* <fog attach="fog" args={['#17171b', 30, 40]} /> */}

        {children}
        {/* <ambientLight intensity={0.53} /> */}

        <OrbitControls />
      </Canvas>
    </div>
  );
}
