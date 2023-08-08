"use client";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Iphone, Ipad, Macbook } from '@/components/3d'

export default function IphoneHero() {

    return (
        <Canvas
            camera={{ position: [0, 0, 5] }}
            >
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} color="blue" />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Ipad />
            <Macbook />
            <Iphone />
            </Canvas>
    )
}