"use client";
import { OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'

export default function CanvasManager({children}) {

    return (
        <Canvas 
            shadows
            gl={{ antialias: false, alpha: true }}
            style={{ height: '100vh', width: '100vw' }}
             
            className="fixed w-full h-full z-50"
        >    <ambientLight intensity={0.5} />
<OrthographicCamera position={[0, 0, -20]}>
            
        
            {/* <OrbitControls /> */}
            {children}
            </OrthographicCamera>
        </Canvas>
    )
}