import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

export function Icon(props) {
  const { nodes, materials } = useGLTF("/models/product-icons-1.glb");

  const Headphones = (props) => {
    const ref = useRef();

    return (
        <group position={[353.155, -100.629, 12.051]} scale={1.175}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={nodes.Cube_3.material}
          position={[26.176, 28.753, -13.727]}
          rotation={[-0.3, 0.279, -0.905]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={nodes.Cube_2.material}
          position={[-4.239, 38.726, -2.737]}
          rotation={[-0.087, 0, 0.087]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[0, -28.185, 0]}
        />
      </group>
    );
    };
const Router = (props) => {
    const ref = useRef();
    return (
        <group position={[118.509, -122.152, -1.889]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_14.geometry}
            material={nodes.Cylinder_14.material}
            position={[-42.406, -16.114, 33.975]}
            rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
            scale={1.212}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_13.geometry}
            material={nodes.Cylinder_13.material}
            position={[-42.49, -16.053, 33.897]}
            rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
            scale={1.212}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_12.geometry}
            material={nodes.Cylinder_12.material}
            position={[-42.476, -16.182, 31.789]}
            scale={1.212}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_8.geometry}
            material={nodes.Rectangle_8.material}
            position={[23.301, -19.384, -10.514]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_7.geometry}
            material={nodes.Rectangle_7.material}
            position={[13.741, -19.384, -10.514]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_6.geometry}
            material={nodes.Rectangle_6.material}
            position={[4.119, -19.384, -10.514]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_5.geometry}
            material={nodes.Rectangle_5.material}
            position={[-5.447, -19.384, -10.514]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_4.geometry}
            material={nodes.Rectangle_4.material}
            position={[-14.712, -19.384, -10.514]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_3.geometry}
            material={nodes.Rectangle_3.material}
            position={[-23.682, -19.384, -10.514]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_11.geometry}
            material={nodes.Cylinder_11.material}
            position={[53.326, -17.121, 29.638]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_10.geometry}
            material={nodes.Cylinder_10.material}
            position={[53.489, -33.905, 43.583]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-0.751, 0.751, 0.751]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_9.geometry}
            material={nodes.Cylinder_9.material}
            position={[39.69, -33.905, 43.583]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-0.751, 0.751, 0.751]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_8.geometry}
            material={nodes.Cylinder_8.material}
            position={[25.246, -33.905, 43.583]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-0.751, 0.751, 0.751]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_7.geometry}
            material={nodes.Cylinder_7.material}
            position={[10.78, -33.905, 43.583]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-0.751, 0.751, 0.751]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_6.geometry}
            material={nodes.Cylinder_6.material}
            position={[-3.533, -33.905, 43.583]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-0.751, 0.751, 0.751]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_5.geometry}
            material={nodes.Cylinder_5.material}
            position={[-44.048, -33.905, 43.583]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-0.751, 0.751, 0.751]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_4.geometry}
            material={nodes.Cylinder_4.material}
            position={[34.406, -15.839, -36.478]}
            rotation={[-0.085, 0.024, -0.264]}
            scale={[0.654, 0.733, 0.652]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={nodes.Cylinder_2.material}
            position={[-34.799, -16.255, -36.478]}
            rotation={[-0.087, -0.016, 0.176]}
            scale={[0.652, 0.732, 0.652]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_4_1.geometry}
            material={nodes.Cylinder_4_1.material}
            position={[42.761, 16.08, -39.25]}
            rotation={[-0.085, 0.024, -0.264]}
            scale={[0.654, 0.733, 0.652]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3.geometry}
            material={nodes.Cylinder_3.material}
            position={[-40.716, 16.204, -39.25]}
            rotation={[-0.087, -0.016, 0.176]}
            scale={[0.652, 0.732, 0.652]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_4_2.geometry}
            material={nodes.Cylinder_4_2.material}
            position={[31.342, -26.536, -35.648]}
            rotation={[-0.085, 0.024, -0.264]}
            scale={[0.654, 0.733, 0.652]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={nodes.Cylinder.material}
            position={[-33.054, -27.245, -35.648]}
            rotation={[-0.087, -0.016, 0.176]}
            scale={[0.652, 0.732, 0.652]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[0.406, -48.774, 6.037]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
    );
    };
const Calculator = (props) => {
    const ref = useRef();
    return (
        <group
          position={[-96.448, -103.983, -4.34]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.833}
        >
          <group
            position={[17.663, -46.905, -1.355]}
            rotation={[0, 0, -0.175]}
            scale={[1.133, 1, 1.041]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_9.geometry}
              material={nodes.Rectangle_9.material}
              position={[-2.083, -20.488, -22.703]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_9_1.geometry}
              material={nodes.Rectangle_9_1.material}
              position={[-2.083, -6.834, -22.703]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_9_2.geometry}
              material={nodes.Rectangle_9_2.material}
              position={[-2.083, 6.407, -22.703]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_9_3.geometry}
              material={nodes.Rectangle_9_3.material}
              position={[-2.083, 20.488, -22.703]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_8_1.geometry}
              material={nodes.Rectangle_8_1.material}
              position={[-2.083, -20.488, -4.182]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_6_1.geometry}
              material={nodes.Rectangle_6_1.material}
              position={[-2.083, 6.407, -4.182]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_7_1.geometry}
              material={nodes.Rectangle_7_1.material}
              position={[-2.083, -6.834, -4.182]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_5_1.geometry}
              material={nodes.Rectangle_5_1.material}
              position={[-2.083, 20.488, -4.182]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_8_2.geometry}
              material={nodes.Rectangle_8_2.material}
              position={[-2.083, -20.488, 10.84]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_7_2.geometry}
              material={nodes.Rectangle_7_2.material}
              position={[-2.083, -6.834, 10.84]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_6_2.geometry}
              material={nodes.Rectangle_6_2.material}
              position={[-2.083, 6.407, 10.84]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4_1.geometry}
              material={nodes.Rectangle_4_1.material}
              position={[-2.083, 20.488, 10.84]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_8_3.geometry}
              material={nodes.Rectangle_8_3.material}
              position={[-2.083, -20.488, 25.588]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_7_3.geometry}
              material={nodes.Rectangle_7_3.material}
              position={[-2.083, -6.834, 25.588]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_6_3.geometry}
              material={nodes.Rectangle_6_3.material}
              position={[-2.083, 6.407, 25.588]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_3_1.geometry}
              material={nodes.Rectangle_3_1.material}
              position={[-2.083, 20.488, 25.588]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.679, 1.041, 1.041]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_3.geometry}
            material={nodes.Ellipse_3.material}
            position={[22.523, -3.804, -24.887]}
            rotation={[Math.PI / 2, 1.396, -Math.PI / 2]}
            scale={0.638}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_2.geometry}
            material={nodes.Ellipse_2.material}
            position={[22.523, -3.804, -0.69]}
            rotation={[Math.PI / 2, 1.396, -Math.PI / 2]}
            scale={0.638}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse.geometry}
            material={nodes.Ellipse.material}
            position={[22.523, -3.804, 25.504]}
            rotation={[Math.PI / 2, 1.396, -Math.PI / 2]}
            scale={0.638}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={nodes.Cube_4.material}
            position={[32.935, 31.915, -1.796]}
            rotation={[Math.PI / 2, 1.484, -Math.PI / 4]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus.geometry}
            material={nodes.Torus.material}
            position={[33.538, 34.932, -1.62]}
            rotation={[Math.PI / 2, 1.484, -Math.PI / 6]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2_1.geometry}
            material={nodes.Rectangle_2_1.material}
            position={[28.147, 35.199, -0.633]}
            rotation={[Math.PI / 2, 1.484, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2_1.geometry}
            material={nodes.Cube_2_1.material}
            position={[2.156, -55.9, -0.507]}
            scale={[1, 0.959, 1.085]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_5.geometry}
            material={nodes.Cube_5.material}
            position={[2.156, -55.9, -44.339]}
            scale={[1, 0.959, 0.699]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={nodes.Cube_1.material}
            position={[2.156, -55.9, 44.339]}
            scale={[1, 0.959, 0.699]}
          />
        </group>
    );
    };
    const Cone = (props) => {
  return (
    <group
    position={[-336.49, -120.672, -1.496]}
    rotation={[Math.PI / 3, 0.611, 0]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Ellipse_2_1.geometry}
      material={nodes.Ellipse_2_1.material}
      position={[-6.497, -20.009, 0.294]}
      rotation={[-Math.PI / 2, 0, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Ellipse_1.geometry}
      material={nodes.Ellipse_1.material}
      position={[-6.497, 16.009, 0.294]}
      rotation={[-Math.PI / 2, 0, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube_2_2.geometry}
      material={nodes.Cube_2_2.material}
      position={[26.684, -14.375, 0]}
      scale={[1, 0.722, 1.184]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube_3_1.geometry}
      material={nodes.Cube_3_1.material}
      position={[-59.88, -0.289, 0]}
      scale={[1, 0.85, 1.184]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube_2.geometry}
      material={nodes.Cube_2.material}
      position={[-4.289, -0.231, 0]}
      scale={[1, 0.722, 1.184]}
    />
  </group>
    );
    };
    const Thing = (props) => {
    return (
        <group position={[346.971, 94.194, 11.083]} scale={1.269}>
        <group position={[15.086, 0, 11.439]} rotation={[-Math.PI / 9, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2_1.geometry}
            material={nodes.Cylinder_2_1.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.486, 0.193, 0.486]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={nodes.Cylinder_1.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.486, 0.193, 0.486]}
          />
        </group>
        <group position={[-15.086, 2.158, -21.993]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2_2.geometry}
            material={nodes.Cylinder_2_2.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.486, 0.193, 0.486]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={nodes.Cylinder_2.material}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.486, 0.193, 0.486]}
          />
        </group>
      </group>
    );
    };

    const Camera = (props) => {
        const ref = useRef();
        return (
<group position={[110.43, 100.419, -23.212]} scale={1.1}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_7_4.geometry}
            material={nodes.Rectangle_7_4.material}
            position={[-13.239, -26.641, 27.861]}
            scale={[1.004, 0.857, 0.857]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_6_4.geometry}
            material={nodes.Rectangle_6_4.material}
            position={[-29.521, -26.641, 27.861]}
            scale={[1.004, 0.857, 0.857]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_5_2.geometry}
            material={nodes.Rectangle_5_2.material}
            position={[-19.074, -8.381, 27.016]}
            scale={[1.073, 0.857, 0.857]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_4_2.geometry}
            material={nodes.Rectangle_4_2.material}
            position={[-23.302, 1.404, 27.016]}
            scale={[1.073, 0.857, 0.857]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_3_2.geometry}
            material={nodes.Rectangle_3_2.material}
            position={[-23.302, 10.721, 27.016]}
            scale={[1.073, 0.857, 0.857]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2_2.geometry}
            material={nodes.Rectangle_2_2.material}
            position={[-19.074, 20.424, 27.016]}
            scale={[1.073, 0.857, 0.857]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={nodes.Sphere.material}
            position={[27.367, 6.455, 33.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3_1.geometry}
            material={nodes.Cylinder_3_1.material}
            position={[34.861, -26.495, 29.773]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2_3.geometry}
            material={nodes.Cylinder_2_3.material}
            position={[15.681, -26.495, 29.773]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3.geometry}
            material={nodes.Cylinder_3.material}
            position={[27.389, 6.265, 30.127]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2_3.geometry}
            material={nodes.Cube_2_3.material}
            position={[0, -4.014, -4.083]}
          />
        </group>
        );
        };

        const Phone = (props) => {
            const ref = useRef();
            return (
                <group
                position={[-103.08, 94.036, -23.182]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.725}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape.geometry}
                  material={nodes.Shape.material}
                  position={[80.607, 12.971, -4.617]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_2_4.geometry}
                  material={nodes.Cube_2_4.material}
                  position={[65.288, 0.122, 0.113]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_3.geometry}
                  material={nodes.Cube_3.material}
                  position={[-28.27, 0, 0]}
                />
              </group>
            );
            };

        const Item = (props) => {
            const ref = useRef();
            return (
                <group position={[-326.591, 97.317, -23.836]} scale={0.901}>
                <group
                  position={[-21.893, 0, -15.924]}
                  rotation={[2.994, 0.155, -2.854]}
                  scale={[0.962, 0.962, 0.374]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_4.geometry}
                    material={nodes.Cylinder_4.material}
                    position={[-27.788, -63.762, 1.935]}
                    rotation={[0, 0, -Math.PI / 4]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_4.geometry}
                    material={nodes.Cube_4.material}
                    position={[0.555, -34.646, 0]}
                    rotation={[0, 0, -Math.PI / 4]}
                  />
                </group>
                <group position={[41.292, 3.846, 10.019]} scale={0.962}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_5.geometry}
                    material={nodes.Cylinder_5.material}
                    position={[-27.788, -63.762, 1.935]}
                    rotation={[0, 0, -Math.PI / 4]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_5.geometry}
                    material={nodes.Cube_5.material}
                    position={[0.555, -34.646, 0]}
                    rotation={[0, 0, -Math.PI / 4]}
                  />
                </group>
              </group>
            );
            };

    return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <Headphones />
        <Router />
        <Calculator />
        <Cone />
        <Thing />
        <Camera />
        <Phone />
        <Item />
        
        
      </group>
    </group>
  );
}

useGLTF.preload("/models/product-icons-1.glb");