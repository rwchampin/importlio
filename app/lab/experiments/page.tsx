"use client"
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const radius = 1;
const mouseRadius = 0.5; // Adjust the mouse radius

const Particle = () => {
  const speed = Math.random() * 0.002 + 0.001;
  const axis = new THREE.Vector3(
    Math.random(),
    Math.random(),
    Math.random()
  ).normalize();

  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);

  const position = new THREE.Vector3(x, y, z);

  return {
    position,
    axis,
    speed,
    originalPosition: position.clone(),
  };
};

const CustomGeometryParticles = ({ count }) => {
  const points = useRef();
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2());

  const particles = useMemo(() => {
    const particlesArray = [];
    for (let i = 0; i < count; i++) {
      particlesArray.push(Particle());
    }
    return particlesArray;
  }, [count]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = points.current.getBoundingClientRect();
    const mouseVector = new THREE.Vector2(
      (clientX - rect.left) / rect.width * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1
    );
    setMousePosition(mouseVector);
  };

  useFrame(() => {
    const positions = points.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const particle = particles[i];
      const newPos = particle.position.clone().applyAxisAngle(particle.axis, particle.speed);
      if (mousePosition.length() > 0) {
        const distanceToMouse = particle.position.distanceTo(mousePosition);
        if (distanceToMouse < mouseRadius) {
          const repulsionForce = mousePosition.clone().sub(particle.position).normalize().multiplyScalar(0.005);
          newPos.add(repulsionForce);
        } else {
          newPos.lerp(particle.originalPosition, 0.05); // Gradually move back to original position
        }
      }
      newPos.toArray(positions, i * 3);
      particle.position.copy(newPos);
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y += 0.005;
  });

  return (
    <div onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
        <ambientLight intensity={0.5} />
        <CustomGeometryParticles count={2000} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default CustomGeometryParticles;
