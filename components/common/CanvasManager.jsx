"use client";
import { Backdrop, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { createPortal } from 'react'

export default function CanvasManager({ children }) {

    return (
        <Canvas>
            <OrbitControls />
            
            
            {children}
        </Canvas>
    )
}