"use client";
import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import vertex from './shaders/vertex.glsl'
import fragment from './shaders/fragment.glsl'
import { useThree, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { useTrail, SoftShadows, Point, Trail } from "@react-three/drei";
import { Effects } from "@react-three/drei";
import {
  FilmPass,
  WaterPass,
  UnrealBloomPass,
  LUTPass,
  LUTCubeLoader,
} from "three-stdlib";
import Plane from './Plane'
extend({ UnrealBloomPass });

//  function Lighting() {
//    return (
//      <group>
//        <ambientLight intensity={0.3} />
//        <pointLight position={[2, 2, 2]} />
//        <pointLight position={[-2, 2, 2]} />
//      </group>
//    )
//  }

function Postpro() {
  return (
    <Effects disableGamma>
      <unrealBloomPass args={[undefined, 1.25, 1, 0]} />
      {/* <filmPass args={[0.2, 0.5, 1500, false]} /> */}
      {/* <lUTPass lut={data.texture} intensity={0.75} /> */}
    </Effects>
  );
}

function TrailPoint({ factor = 1, position = [0, 0, 0], ...props }) {
    const ref = useRef<any>(null)
    useFrame((state) => {
        // slow the point down and scale down based on random factor
        ref.current.position.lerp(state.mouse, 0.1 * factor)
        ref.current.scale.setScalar(0.2 * factor)

        // randomize color and rotation
        ref.current.material.color.setHSL(Math.sin(0.1 * factor + state.clock.elapsedTime * 0.1), 0.5, 0.5)
        ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01 * factor

    })
    return <Point ref={ref} position={position} {...props} />
  }


export default function CustomCursor() {
  const ref = useRef<any>(null);
  // const light = useRef<any>(null);
  const plane = useRef<any>(null);
  const material = useRef(new THREE.ShaderMaterial({
    extensions: {
      derivatives: "#extension GL_OES_standard_derivatives : enable"
    },
    side: THREE.DoubleSide,
    uniforms: {
      time: { value: 0 },
      uLight: { value: new THREE.Vector3(0, 0, 0) },
      resolution: { value: new THREE.Vector4() },
    },
    // wireframe: true,
    // transparent: true,
    vertexShader: vertex,
    fragmentShader: fragment
  }))
    // const pointTrail = useRef<any>(null);
    const radius = 3
    const detail = 5
  // const length = 100;
  //   const decay = 0.5;
  //   const local = true;
  //   const stride = .1
  //   const interval = .1
  // const trailPoints = useTrail(
  //   ref.current, // Required target object. This object will produce the trail.
  //   {
  //     length, // Length of the line
  //     decay, // How fast the line fades away
  //     local, // Wether to use the target's world or local positions
  //     stride, // Min distance between previous and current point
  //     interval, // Number of frames to wait before next calculation
  //   }
  // )
//   const targetPosition = new THREE.Vector3();
//   const spheresCenter = new THREE.Vector3(0, 0, 0);
  const tmpVector = new THREE.Vector3();
//   const repulsion = new THREE.Vector3(0, 0, 0);
  const repulsionPoint = new THREE.Vector3();
  const prevRepulsionPoint = new THREE.Vector3();
//   const dir = new THREE.Vector3(0, 0, 0);
//   let velocity = 0.05;
//   const r = 300;

  useFrame(({ pointer, camera, raycaster, viewport }) => {
    const p = plane.current;

    // set plane size to take u the entire fiewport based om the uirrent camera position
    p.scale.set(viewport.width, viewport.height, 1);
    const mater = material.current;

    mater.uniforms.uLight.value = new THREE.Vector3(pointer.x, pointer.y, plane.current.position.z-5);
    // mater.uniforms.time.value += 0.05;


    const m = ref.current;
    // camera.lookAt(p.position);
    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects([p]);

    if (intersects.length > 0) {
      prevRepulsionPoint.copy(repulsionPoint);
      repulsionPoint.copy(intersects[0].point);
      tmpVector.copy(prevRepulsionPoint).lerp(repulsionPoint, 0.5);
      m.position.copy(tmpVector);
      // m.position.z = -90;
      // light.current.position.copy(tmpVector);
      // light.current.position.z = -90;
      tmpVector.sub(prevRepulsionPoint);
      m.lookAt(prevRepulsionPoint);
      const l = tmpVector.length();

      m.scale.x = 1 - 0.1 * l;
      m.scale.y = 1 - 0.1 * l;
      m.scale.z = 1 + 0.25 * l;
    }

  });

  return (
    <>

      <Plane ref={plane} />
        

        <mesh ref={ref}>
          <icosahedronGeometry args={[radius, detail]} />
          <meshBasicMaterial color="black" />
          {/* <shaderMaterial attach="material" args={[material]} /> */}
        </mesh>

        {/* <pointLight ref={light} intensity={5} color={0xff0000} distance={50} /> */}


    
      {/* <Postpro /> */}
    </>
  );
}
