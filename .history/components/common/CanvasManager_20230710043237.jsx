"use client";
import { Backdrop, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { createPortal } from 'react'

export default function CanvasManager({ children }) {

    return (
        <Canvas
            shadows
            gl={{ alpha: false }}
            // camera={{ position: [0, 0, 0], fov: 70 }}
            onCreated={({ gl }) => {
                gl.toneMapping = THREE.ACESFilmicToneMapping

            }}

        >
            <OrbitControls />
            <Backdrop
  floor={0.25} // Stretches the floor segment, 0.25 by default
  segments={20} // Mesh-resolution, 20 by default
>
  <meshStandardMaterial color="#353540" />
</Backdrop>
            <ambientLight intensity={10.5} color={'red'} />
            {children}
        </Canvas>
    )
}