 "use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree, Backdrop } from "@react-three/fiber";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette
} from "@react-three/postprocessing";
import {
  Html,
  Icosahedron,
  useTexture,
  useCubeTexture,
  MeshDistortMaterial,
  Sphere
} from "@react-three/drei";
import bump from "@/assets/img/bump.jpg";

function Instances({ material }) {
  // we use this array ref to store the spheres after creating them
  const [sphereRefs] = useState(() => []);
  // we use this array to initialize the background spheres
  const initialPositions = [
    [-4, 20, -12],
    [-10, 12, -4],
    [-11, -12, -23],
    [-16, -6, -10],
    [12, -2, -3],
    [13, 4, -12],
    [14, -2, -23],
    [8, 10, -20]
  ];
  // smaller spheres movement
  useFrame(() => {
    // animate each sphere in the array
    sphereRefs.forEach((el) => {
      el.position.y += 0.02;
      if (el.position.y > 19) el.position.y = -18;
      el.rotation.x += 0.06;
      el.rotation.y += 0.06;
      el.rotation.z += 0.02;
    });
  });
  return (
    <>
      <MainSphere material={material} />
      {initialPositions.map((pos, i) => (
        <Icosahedron
          args={[1, 4]}
          position={[pos[0], pos[1], pos[2]]}
          material={material}
          key={i}
          ref={(ref) => (sphereRefs[i] = ref)}
        />
      ))}
    </>
  );
}

function Scene() {
  const bumpMap = useTexture(bump);
  const envMap = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/src/assets/img/" }
  );
  // We use `useResource` to be able to delay rendering the spheres until the material is ready
  const [material, set] = useState();

  return (
    <>
      <MeshDistortMaterial
        ref={set}
        envMap={envMap}
        bumpMap={bumpMap}
        color={"#010101"}
        roughness={0.1}
        metalness={1}
        bumpScale={0.005}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1}
        distort={0.4}
      />
      {material && <Instances material={material} />}
    </>
  );
}

export default function SphereField() {
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    camera.position.z = -10;
    camera.lookAt(0, 0, 0)
    scene.fog = new THREE.Fog("#161616", 8, 30);
    gl.setClearColor("#050505");
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputEncoding = THREE.sRGBEncoding;
  }
  , []);
  return (
<div className="fuck">  

      <color attach="background" args={["#050505"]} />
      <fog color="#161616" attach="fog" near={8} far={30} />
      <Suspense fallback={<Html center>Loading.</Html>}>
        <Scene />
      </Suspense>
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </div>
  );
}
