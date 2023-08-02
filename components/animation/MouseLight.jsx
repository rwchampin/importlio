"use client";
import { useRef } from "react";
import { useFrame, useThree } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';
export default function MouseLight() {
  const cursor = useRef();
  const { mouse } = useThree();

   

  useFrame(({ camera }) => {
    const mouse3D = new THREE.Vector3(mouse.x * 2 - 1, -mouse.y * 2 + 1, 0.5);
    mouse3D.unproject(camera);
    const dir = mouse3D.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    cursor.current.position.copy(pos);

    // trail.forEach((_, index) => {
    //   if (index === 0) {
    //     trail[index].position.copy(pos);
    //   } else {
    //     trail[index].position.lerp(trail[index - 1].position, 0.4);
    //   }
    // });
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight color="hotpink" intensity={1} distance={5} decay={1} position={[0, 0, 0]} />
      
      <Trail
  width={0.2} // Width of the line
  color={'hotpink'} // Color of the line
  length={1} // Length of the line
  decay={1} // How fast the line fades away
  local={false} // Wether to use the target's world or local positions
  stride={0} // Min distance between previous and current point
  interval={1} // Number of frames to wait before next calculation
  target={undefined} // Optional target. This object will produce the trail.
  attenuation={(width) => width} // A function to define the width in each point along it.
>
  {/* If `target` is not defined, Trail will use the first `Object3D` child as the target. */}
  <mesh ref={cursor} position={[0,0,20]}>
    <sphereGeometry />
    <meshBasicMaterial />
  </mesh>

  {/* You can optionally define a custom meshLineMaterial to use. */}
  {/* <meshLineMaterial color={"red"} /> */}
</Trail>
    
      
    </>
  );
}
