"use client";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, useGLTF } from '@react-three/drei'
import { Model } from '@/components/3d'
const url = 'https://importlio-bucket.nyc3.digitaloceanspaces.com/static/assets/iphone.glb'

export default function Iphone() {

    return (
        <Canvas
            camera={{ position: [0, 0, 5] }}
            >
            <OrbitControls />
            <Stars />

            <Model url={url} />
            </Canvas>
    )
}