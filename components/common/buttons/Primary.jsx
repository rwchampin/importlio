"use client";
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Primary({ children,type="button", success }) {
    const parentRef = useRef(null);
    const canvasRef = useRef(null);

    // useEffect(() => {
    //     if(!parentRef.current || !canvasRef.current) return;
    //     const renderer = new THREE.WebGLRenderer({ alpha: true });
    //     debugger
    //     renderer.setSize(parentRef.current.clientWidth * 2, parentRef.current.clientHeight * 3);
    //     renderer.setPixelRatio(window.devicePixelRatio);

    //     parentRef.current.appendChild(renderer.domElement);
    //      const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera(75, parentRef.current.clientWidth / parentRef.current.clientHeight, 0.1, 1000);
    //     camera.position.z = 5;

    //     const positions = [];
    //     const bufferGeometry = new THREE.BufferGeometry();
    //     const sizes = [];
    //     const colors = [];

    //     const color = new THREE.Color();

    //     for (let i = 0; i < 1000; i++) {
    //         const x = Math.random() * 2 - 1;
    //         const y = Math.random() * 2 - 1;
    //         const z = Math.random() * 2 - 1;

    //         positions.push(x, y, z);

    //         sizes.push(Math.random() * 10);

    //         color.setHSL(i / 1000, 1.0, 0.5);

    //         colors.push(color.r, color.g, color.b);

    //     }

    //     bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    //     bufferGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1).setUsage(THREE.DynamicDrawUsage));
    //     bufferGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    //     const material = new THREE.ShaderMaterial({
    //         uniforms: {
    //             uTime: { value: 0.0 },
    //             uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    //             uSize: { value: 30.0 },
    //             uScale: { value: 0.5 },
    //         },
    //         vertexShader: `
    //             uniform float uTime;
    //             uniform float uPixelRatio;
    //             uniform float uSize;
    //             uniform float uScale;

    //             attribute float size;
    //             attribute vec3 color;

    //             varying vec3 vColor;

    //             void main() {
    //                 vColor = color;

    //                 vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    //                 vec4 viewPosition = viewMatrix * modelPosition;
    //                 vec4 projectionPosition = projectionMatrix * viewPosition;

    //                 gl_Position = projectionPosition;
    //                 gl_PointSize = size * uPixelRatio * uScale / gl_Position.w;
    //             }
    //         `,
    //         fragmentShader: `
    //             uniform float uTime;
    //             uniform float uPixelRatio;
    //             uniform float uSize;

    //             varying vec3 vColor;

    //             void main() {
    //                 float t = sin(uTime) * 0.5 + 0.5;
    //                 gl_FragColor = vec4(vColor * t, 1.0);
    //             }
    //         `,
    //         transparent: true,
    //         depthTest: false,
    //         depthWrite: false,
    //         blending: THREE.AdditiveBlending,
    //     });

    //     const points = new THREE.Points(bufferGeometry, material);
    //     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    //     const pointLight = new THREE.PointLight(0xffffff, 0.5);
    //     scene.add(points, ambientLight, pointLight);

    //     const animate = () => {

    //         requestAnimationFrame(animate);

    //         const time = performance.now();

    //         material.uniforms.uTime.value = time / 1000;
    //         material.uniforms.uScale.value = window.devicePixelRatio;

    //         renderer.render(scene, camera);
    //     }

    //     animate();

    // }, []);
    if(type === "submit") {
        return (
        <input type="submit" className="px-6 py-2 font-bold font-apercu-bold w-full text-white capitalize transition-colors duration-300 transform bg-bg-button bg-button rounded-lg hover:shadow-2xl hover:bg-button-hover" value={children} />
    );
    }
    const text = success ? 'Saved!' : children;
    return (
        <div className="relative" ref={parentRef}>
        <button className="px-6 py-2 font-medium w-full text-white capitalize transition-colors duration-300 transform bg-button rounded-lg hover:bg-button-hover hover:shadow-2xl">
            {text}
        </button>
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full rounded-lg" />
        </div>
    );
}