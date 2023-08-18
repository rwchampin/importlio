"use client";
import { Canvas, Stars, useFrame, extend, useThree } from "@react-three/fiber";
import {  useRef, useState } from "react";
import * as THREE from "three";
import { UnrealBloomPass } from 'three-stdlib'
import { Effects, CatmullRomLine, Sphere, Sparkles, OrthographicCamera, BakeShadows } from '@react-three/drei'
import { useControls } from 'leva'
import { EffectComposer, EffectPass, RenderPass } from 'postprocessing';

import { createNoise3D } from 'simplex-noise'

const noise3D = createNoise3D();

extend({ Canvas,EffectComposer, EffectPass, RenderPass, UnrealBloomPass });
function cross(a, b){
    return [ a[1] * b[2] - a[2] * b[1],
         a[2] * b[0] - a[0] * b[2],
         a[0] * b[1] - a[1] * b[0]
       ]; 
  }
const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 3, 1), toneMapped: false })
var oldMethod = false;
function normalize(v){
    var length = Math.hypot(v[0], v[1], v[2]);
    return [v[0]/length, v[1]/length, v[2]/length];
  }
function computeCurl(x, y, z){
    var eps = 1e-4;
    var curl = [0, 0, 0];
  
    if(!oldMethod){
  
      //Find rate of change in X plane
      var n1 = noise3D(x + eps, y, z); 
      var n2 = noise3D(x - eps, y, z); 
      //Average to find approximate derivative
      var a = (n1 - n2)/(2 * eps);
    
      //Find rate of change in Y plane
      n1 = noise3D(x, y + eps, z); 
      n2 = noise3D(x, y - eps, z); 
      //Average to find approximate derivative
      var b = (n1 - n2)/(2 * eps);
    
      //Find rate of change in Z plane
      n1 = noise3D(x, y, z + eps); 
      n2 = noise3D(x, y, z - eps); 
      //Average to find approximate derivative
      var c = (n1 - n2)/(2 * eps);
    
      var noiseGrad0 = [a, b, c];
    
      // Offset position for second noise read
      x += 10.5;
      y += 10.5;
      z += 10.5;
    
      //Find rate of change in X
      n1 = noise3D(x + eps, y, z); 
      n2 = noise3D(x - eps, y, z); 
      //Average to find approximate derivative
      a = (n1 - n2)/(2 * eps);
    
      //Find rate of change in Y
      n1 = noise3D(x, y + eps, z); 
      n2 = noise3D(x, y - eps, z); 
      //Average to find approximate derivative
      b = (n1 - n2)/(2 * eps);
    
      //Find rate of change in Z
      n1 = noise3D(x, y, z + eps); 
      n2 = noise3D(x, y, z - eps); 
      //Average to find approximate derivative
      c = (n1 - n2)/(2 * eps);
    
      var noiseGrad1 = [a, b, c];
    
      noiseGrad1 = normalize(noiseGrad1);
      noiseGrad1 = normalize(noiseGrad1);
      curl = cross(noiseGrad0, noiseGrad1);
  
    }else{
  
      //Find rate of change in X
      var n1 = noise3D(x + eps, y, z); 
      var n2 = noise3D(x - eps, y, z);
      var dx = [n1[0] - n2[0], n1[1] - n2[1], n1[2] - n2[2]];
  
      //Find rate of change in Y
      n1 = noise3D(x, y + eps, z); 
      n2 = noise3D(x, y - eps, z);
      var dy = [n1[0] - n2[0], n1[1] - n2[1], n1[2] - n2[2]];
  
      //Find rate of change in Z
      n1 = noise3D(x, y, z + eps); 
      n2 = noise3D(x, y, z - eps);
      var dz = [n1[0] - n2[0], n1[1] - n2[1], n1[2] - n2[2]];
  
      curl[0] = (dy[2] - dz[1]) / (2.0*eps);
      curl[1] = (dz[0] - dx[2]) / (2.0*eps);
      curl[2] = (dx[1] - dy[0]) / (2.0*eps);
  
    }
    return normalize(curl);
  }

  
  const getCurve = (start) => {
    let scale = 0.5
    let points = []

    points.push(start)
    let currentPoint = start.clone()

    for (let i = 0; i < 600; i++) {
        let v = computeCurl(currentPoint.x, currentPoint.y, currentPoint.z)

        currentPoint.addScaledVector(v, .001)

        points.push(currentPoint.clone())
    }

    return points
}
const amt = 20;
const Tube = ({idx}) => {






        return (
            <CatmullRomLine
  points={getCurve(new THREE.Vector3(
    Math.sin(idx / amt) * 0.5,
    Math.cos(idx / amt) * 0.5,
    idx / amt
  ))}       // Array of Points
  closed={false}                  // Default
  curveType="centripetal"         // One of "centripetal" (default), "chordal", or "catmullrom"
  tension={0.5}                   // Default (only applies to "catmullrom" curveType)
  color="red"                   // Default
  lineWidth={4}                   // In pixels (default)
  dashed={false}                  // Default
  vertexColors={[0xff0000,]} // Optional array of RGB values for each point
    material={glowBlue}           // All THREE.LineMaterial props are valid
/>
        )
    }


const Tubes = () => {

    return new Array(600).fill().map((_, i) => {
        return <Tube key={i} idx={i} />
    })


}
 
const GlowingSphere = ()  => {
    const sphere = useRef(null);
    const { mouse, viewport, camera } = useThree();
    const [bloom, setBloom] = useState(false);
    const { threshold, strength, radius } = useControls({
        threshold: { value: 0.5, min: 0, max: 1 },
        strength: { value: 0.5, min: 0, max: 10 },
        radius: { value: 0.5, min: 0, max: 1 },
        })
        const { cam } = useControls({
            camera: {
                value: 'perspective',
                options: {
                    perspective: 'perspective',
                    orthographic: 'orthographic',
                },
            },
            position: {
                value: [0, 0, 5],
                step: 0.1,
                min: -10,
                max: 10,
                label: 'position',
            },
            rotation: {
                value: [0, 0, 0],
                step: 0.1,
                min: -10,
                max: 10,
                label: 'rotation',
            },
            zoom: {
                value: 1,
                step: 0.1,
                min: 0,
                max: 10,
                label: 'zoom',
            },
            near: {
                value: 0.1,
                step: 0.1,
                min: 0.1,
                max: 10,
                label: 'near',
            },
            far: {
                value: 1000,
                step: 0.1,
                min: 0.1,
                max: 1000,
                label: 'far',
            },
        })

        const scene = useControls({
            scene: {
                value: 'scene',
                options: {
                    scene: 'scene',
                    scene2: 'scene2',
                },
            },
            background: {
                value: '#000000',
                label: 'background',
            },
            fog: {
                value: false,
                label: 'fog',
            },
            fogColor: {
                value: '#000000',
                label: 'fogColor',
            },
            fogNear: {
                value: 1,
                step: 0.1,
                min: 0.1,
                max: 1000,
                label: 'fogNear',
            },
            fogFar: {
                value: 1000,
                step: 0.1,
                min: 0.1,
                max: 1000,
                label: 'fogFar',
            },
        })


  
    useFrame(() => {
        var vector = new THREE.Vector3();
        var pos = new THREE.Vector3();
        vector.set(mouse.x, mouse.y, 1);
        vector.unproject(camera); // -1,1 => -screen width/2,screen width/2
        vector.sub(camera.position).normalize();
        var distance = -camera.position.z / vector.z;
        pos.copy(camera.position).add(vector.multiplyScalar(distance));

        sphere.current.position.x = elasticIn(pos.x) + pos.x;
        sphere.current.position.y =  elasticIn(pos.y) +pos.y;
        sphere.current.position.z = 0;

    });
    return (  
  
          <>
            <mesh
            receiveShadow={true}
             position={[0,0,0]}>
              <planeGeometry  receiveShadow={true} side={THREE.DoubleSide} args={[viewport.width, viewport.height]} />
              <meshBasicMaterial color="white" />
            </mesh>
          
         
            <Sphere ref={sphere} args={[0.006, 32, 32]}>
                <Sparkles
                    color={0xff0000}
                    opacity={1}
                    scale={0.15}
                    fade={true}
                    speed={1}
                    size={0.1}
                    noise={.01}
                />
        <primitive object={glowRed} />
      </Sphere>

      {/* Non-Glowing Objects */}
      <Sphere args={[0.3, 32, 32]} position={[1, 1, 1]}>
        <meshBasicMaterial color="blue" />

      </Sphere>
  {/* Bloom Effect */}
  <Effects disableGamma>
        <unrealBloomPass threshold={threshold} strength={1.0} radius={0.5} />
      </Effects>

      </>
    );
  };
  

export default GlowingSphere;