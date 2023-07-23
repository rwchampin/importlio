import { useState, useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer, PointLight } from '@react-three/postprocessing';
import { useSpring, a } from '@react-spring/three';

const Sphere = () => {
  const sphereRef = useRef();

  // Update the sphere's position based on mouse position
  const { viewport } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / viewport.width) * 2 - 1,
        y: -(e.clientY / viewport.height) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [viewport]);

  useFrame(() => {
    // Move the sphere to follow the mouse position
    sphereRef.current.position.x = mousePos.x;
    sphereRef.current.position.y = mousePos.y;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

const MouseFollower = () => {
  // Create a spring animation for the point light intensity
  const { intensity } = useSpring({
    intensity: 1.5,
    config: { mass: 5, tension: 1000, friction: 100 },
  });

  return (
    <Canvas style={{ position: 'absolute' }}>
      <Sphere />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 3]} intensity={intensity} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  );
};

export default MouseFollower;
