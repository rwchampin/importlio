"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleSpinner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const container = containerRef.current;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Set up particles
    const particleCount = 200;
    const particles = new THREE.Geometry();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      opacity: 0.5,
      transparent: true,
    });

    // Generate particles with random positions and colors
    for (let i = 0; i < particleCount; i++) {
      const vertex = new THREE.Vector3();
      vertex.x = Math.random() * 2 - 1;
      vertex.y = Math.random() * 2 - 1;
      vertex.z = Math.random() * 2 - 1;
      particles.vertices.push(vertex);

      const color = new THREE.Color();
      color.setHSL(Math.random(), 1, 0.5);
      particles.colors.push(color);
    }

    // Create particle system
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Create trail effect
    const trailCount = 200;
    const trailGeometry = new THREE.Geometry();
    const trailMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      opacity: 0.3,
      transparent: true,
    });

    for (let i = 0; i < trailCount; i++) {
      trailGeometry.vertices.push(new THREE.Vector3());
      trailGeometry.colors.push(new THREE.Color());
    }

    const trailSystem = new THREE.Points(trailGeometry, trailMaterial);
    scene.add(trailSystem);

    // Animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Update particle positions and trails
      for (let i = 0; i < particleCount; i++) {
        const particle = particles.vertices[i];
        const trail = trailGeometry.vertices[i];

        // Randomly move particles
        particle.x += (Math.random() - 0.5) * 0.01;
        particle.y += (Math.random() - 0.5) * 0.01;
        particle.z += (Math.random() - 0.5) * 0.01;

        // Update trail positions
        trail.copy(particle);
      }

      particles.verticesNeedUpdate = true;
      trailGeometry.verticesNeedUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ParticleSpinner;
