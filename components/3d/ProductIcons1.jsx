import React, { useRef, useEffect } from "react";
import { useGLTF, OrthographicCamera, OrbitControls } from "@react-three/drei";
import gsap, { ScrollTrigger } from "gsap";
import { useFrame } from "@react-three/fiber";
import { radians, map, distance, hexToRgbTreeJs } from '@/utils/math';
import * as THREE from 'three';

function RoundedBoxGeometry(
  width,
  height,
  depth,
  radius,
  radiusSegments
) {

  THREE.BufferGeometry.call(this);

  this.type = 'RoundedBoxGeometry';


  //validate params ===================================

  radiusSegments = !isNaN(radiusSegments) ? Math.max(1, Math.floor(radiusSegments)) : 1;

  width = !isNaN(width) ? width : 1;
  height = !isNaN(height) ? height : 1;
  depth = !isNaN(depth) ? depth : 1;

  radius = !isNaN(radius) ? radius : .15;

  radius = Math.min(radius, Math.min(width, Math.min(height, Math.min(depth))) / 2);

  var edgeHalfWidth = width / 2 - radius;
  var edgeHalfHeight = height / 2 - radius;
  var edgeHalfDepth = depth / 2 - radius;


  //not sure why this is needed, for querying? ========

  this.parameters = {
    width: width,
    height: height,
    depth: depth,
    radius: radius,
    radiusSegments: radiusSegments
  };


  //calculate vertices count ==========================

  var rs1 = radiusSegments + 1; //radius segments + 1

  var totalVertexCount = (rs1 * radiusSegments + 1) << 3;


  //make buffers ======================================

  var positions = new THREE.BufferAttribute(new Float32Array(totalVertexCount * 3), 3);

  var normals = new THREE.BufferAttribute(new Float32Array(totalVertexCount * 3), 3);


  //some vars =========================================

  var
    cornerVerts = [],
    cornerNormals = [],
    vertex = new THREE.Vector3(),
    vertexPool = [],
    normalPool = [],
    indices = []
    ;

  var
    lastVertex = rs1 * radiusSegments,
    cornerVertNumber = rs1 * radiusSegments + 1
    ;

  doVertices();
  doFaces();
  doCorners();
  doHeightEdges();
  doWidthEdges();
  doDepthEdges()

  // calculate vert positions =========================

  function doVertices (){

    //corner offsets
    var cornerLayout = [
      new THREE.Vector3(1, 1, 1),
      new THREE.Vector3(1, 1, -1),
      new THREE.Vector3(-1, 1, -1),
      new THREE.Vector3(-1, 1, 1),
      new THREE.Vector3(1, -1, 1),
      new THREE.Vector3(1, -1, -1),
      new THREE.Vector3(-1, -1, -1),
      new THREE.Vector3(-1, -1, 1)
    ];

    //corner holder
    for (var j = 0; j < 8; j++) {

      cornerVerts.push([]);
      cornerNormals.push([]);

    }

    //construct 1/8 sphere ==============================

    var PIhalf = Math.PI / 2;

    var cornerOffset = new THREE.Vector3(edgeHalfWidth, edgeHalfHeight, edgeHalfDepth);

    for (var y = 0; y <= radiusSegments; y++) {

      var v = y / radiusSegments;

      var va = v * PIhalf; //arrange in 90 deg

      var cosVa = Math.cos(va); //scale of vertical angle

      var sinVa = Math.sin(va);

      if (y == radiusSegments) {

        vertex.set(0, 1, 0);

        var vert = vertex.clone().multiplyScalar(radius).add(cornerOffset);

        cornerVerts[0].push(vert);

        vertexPool.push(vert);

        var norm = vertex.clone();

        cornerNormals[0].push(norm);

        normalPool.push(norm);

        continue; //skip row loop

      }

      for (var x = 0; x <= radiusSegments; x++) {

        var u = x / radiusSegments;

        var ha = u * PIhalf;

        //make 1/8 sphere points
        vertex.x = cosVa * Math.cos(ha);
        vertex.y = sinVa;
        vertex.z = cosVa * Math.sin(ha);

        //copy sphere point, scale by radius, offset by half whd
        const vert = vertex.clone().multiplyScalar(radius).add(cornerOffset);

        cornerVerts[0].push(vert);

        vertexPool.push(vert);

        //sphere already normalized, just clone

        const norm = vertex.clone().normalize();
        cornerNormals[0].push(norm);
        normalPool.push(norm);

      }

    }

    //distribute corner verts ===========================

    for (var i = 1; i < 8; i++) {

      for (var j = 0; j < cornerVerts[0].length; j++) {

        const vert = cornerVerts[0][j].clone().multiply(cornerLayout[i]);

        cornerVerts[i].push(vert);

        vertexPool.push(vert);

        const norm = cornerNormals[0][j].clone().multiply(cornerLayout[i]);

        cornerNormals[i].push(norm);

        normalPool.push(norm);

      }

    }

  }


  // weave corners ====================================

  function doCorners(){
    var flips = [
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true
    ];

    var lastRowOffset = rs1 * (radiusSegments - 1);

    for (var i = 0; i < 8; i++) {

      var cornerOffset = cornerVertNumber * i;

      for (var v = 0; v < radiusSegments - 1; v++) {

        var r1 = v * rs1; 		//row offset
        var r2 = (v + 1) * rs1; //next row

        for (var u = 0; u < radiusSegments; u++) {

          var u1 = u + 1;
          var a = cornerOffset + r1 + u;
          var b = cornerOffset + r1 + u1;
          var c = cornerOffset + r2 + u;
          var d = cornerOffset + r2 + u1;

          if (!flips[i]) {

            indices.push(a);
            indices.push(b);
            indices.push(c);

            indices.push(b);
            indices.push(d);
            indices.push(c);

          } else {

            indices.push(a);
            indices.push(c);
            indices.push(b);

            indices.push(b);
            indices.push(c);
            indices.push(d);

          }

        }

      }

      for (let u = 0; u < radiusSegments; u++) {
        const a = cornerOffset + lastRowOffset + u;
        const b = cornerOffset + lastRowOffset + u + 1;
        const c = cornerOffset + lastVertex;

        if (!flips[i]) {

          indices.push(a);
          indices.push(b);
          indices.push(c);

        } else {

          indices.push(a);
          indices.push(c);
          indices.push(b);

        }
      }
    }
  }


  //plates ============================================
  //fix this loop matrices find pattern something

  function doFaces(){
    //top
    var a = lastVertex;// + cornerVertNumber * 0;
    var b = lastVertex + cornerVertNumber;// * 1;
    var c = lastVertex + cornerVertNumber * 2;
    var d = lastVertex + cornerVertNumber * 3;

    indices.push(a);
    indices.push(b);
    indices.push(c);
    indices.push(a);
    indices.push(c);
    indices.push(d);

    //bottom
    a = lastVertex + cornerVertNumber * 4;// + cornerVertNumber * 0;
    b = lastVertex + cornerVertNumber * 5;// * 1;
    c = lastVertex + cornerVertNumber * 6;
    d = lastVertex + cornerVertNumber * 7;

    indices.push(a);
    indices.push(c);
    indices.push(b);
    indices.push(a);
    indices.push(d);
    indices.push(c);

    //left
    a = 0;
    b = cornerVertNumber;
    c = cornerVertNumber * 4;
    d = cornerVertNumber * 5;

    indices.push(a);
    indices.push(c);
    indices.push(b);
    indices.push(b);
    indices.push(c);
    indices.push(d);

    //right
    a = cornerVertNumber * 2;
    b = cornerVertNumber * 3;
    c = cornerVertNumber * 6;
    d = cornerVertNumber * 7;

    indices.push(a);
    indices.push(c);
    indices.push(b);
    indices.push(b);
    indices.push(c);
    indices.push(d);

    //front
    a = radiusSegments;
    b = radiusSegments + cornerVertNumber * 3;
    c = radiusSegments + cornerVertNumber * 4;
    d = radiusSegments + cornerVertNumber * 7;

    indices.push(a);
    indices.push(b);
    indices.push(c);
    indices.push(b);
    indices.push(d);
    indices.push(c);

    //back
    a = radiusSegments + cornerVertNumber;
    b = radiusSegments + cornerVertNumber * 2;
    c = radiusSegments + cornerVertNumber * 5;
    d = radiusSegments + cornerVertNumber * 6;

    indices.push(a);
    indices.push(c);
    indices.push(b);
    indices.push(b);
    indices.push(c);
    indices.push(d);

  }


  // weave edges ======================================

  function doHeightEdges (){
    for (var i = 0; i < 4; i++) {
      var cOffset = i * cornerVertNumber;
      var cRowOffset = 4 * cornerVertNumber + cOffset;
      var needsFlip = i & 1 === 1;

      for (var u = 0; u < radiusSegments; u++) {
        var u1 = u + 1;
        var a = cOffset + u;
        var b = cOffset + u1;
        var c = cRowOffset + u;
        var d = cRowOffset + u1;

        if (!needsFlip) {

          indices.push(a);
          indices.push(b);
          indices.push(c);
          indices.push(b);
          indices.push(d);
          indices.push(c);

        } else {

          indices.push(a);
          indices.push(c);
          indices.push(b);
          indices.push(b);
          indices.push(c);
          indices.push(d);

        }
      }
    }
  }

  function doDepthEdges (){
    var cStarts = [0, 2, 4, 6];
    var cEnds = [1, 3, 5, 7];

    for (var i = 0; i < 4; i++) {
      var cStart = cornerVertNumber * cStarts[i];
      var cEnd = cornerVertNumber * cEnds[i];

      var needsFlip = 1 >= i;

      for (var u = 0; u < radiusSegments; u++) {
        var urs1 = u * rs1;
        var u1rs1 = (u + 1) * rs1;

        var a = cStart + urs1;
        var b = cStart + u1rs1;
        var c = cEnd + urs1;
        var d = cEnd + u1rs1

        if (needsFlip) {

          indices.push(a);
          indices.push(c);
          indices.push(b);
          indices.push(b);
          indices.push(c);
          indices.push(d);

        } else {

          indices.push(a);
          indices.push(b);
          indices.push(c);
          indices.push(b);
          indices.push(d);
          indices.push(c);

        }
      }
    }
  }

  function doWidthEdges (){
    var end = radiusSegments - 1;

    var cStarts = [0, 1, 4, 5];
    var cEnds = [3, 2, 7, 6];
    var needsFlip = [0, 1, 1, 0];

    for (var i = 0; i < 4; i++) {
      var cStart = cStarts[i] * cornerVertNumber;
      var cEnd = cEnds[i] * cornerVertNumber;

      for (var u = 0; u <= end; u++) {
        var a = cStart + radiusSegments + u * rs1;
        var b = cStart + (u != end ? radiusSegments + (u + 1) * rs1 : cornerVertNumber - 1);

        var c = cEnd + radiusSegments + u * rs1;
        var d = cEnd + (u != end ? radiusSegments + (u + 1) * rs1 : cornerVertNumber - 1);

        if (!needsFlip[i]) {
          indices.push(a);
          indices.push(b);
          indices.push(c);
          indices.push(b);
          indices.push(d);
          indices.push(c);
        } else {
          indices.push(a);
          indices.push(c);
          indices.push(b);
          indices.push(b);
          indices.push(c);
          indices.push(d);
        }
      }
    }
  }


  //fill buffers ======================================

  var index = 0;

  for (var i = 0; i < vertexPool.length; i++) {
    positions.setXYZ(
      index,
      vertexPool[i].x,
      vertexPool[i].y,
      vertexPool[i].z
    );

    normals.setXYZ(
      index,
      normalPool[i].x,
      normalPool[i].y,
      normalPool[i].z
    );

    index++;
  }

  this.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));

  this.addAttribute('position', positions);

  this.addAttribute('normal', normals);
}

RoundedBoxGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
RoundedBoxGeometry.constructor = RoundedBoxGeometry;



class Torus {
  constructor() {
    this.geom = new THREE.TorusBufferGeometry(.3, .12, 30, 200);
    this.rotationX = radians(90);
    this.rotationY = 0;
    this.rotationZ = 0;
  }
}
class Box {
  constructor() {
    this.geom = new RoundedBoxGeometry(.5, .5, .5, .02, .2);
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
  }
}
class Cone {
  constructor() {
    this.geom = new THREE.ConeBufferGeometry(.3, .5, 32);
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = radians(-180);
  }
}
export default function ProductIcons1(props) {
  const { nodes, materials } = useGLTF("/models/product-icons-1.glb");
  const earbuds = useRef();
  const mic = useRef();
  const usb = useRef();
  const radio = useRef();
  const rings = useRef();
  const duck = useRef();
  const router = useRef();



  const setup=() => {


    this.raycaster = new THREE.Raycaster();

    this.backgroundColor = '#1b1b1b';
    this.gutter = { size: 1.2 };
    this.meshes = [];
    this.grid = { cols: 15, rows: 7 };
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.mouse3D = new THREE.Vector2();
    this.repulsion = 1;
    this.geometries = [
      new Box(),
      new Torus(),
      new Cone()
    ];

    const gui = this.gui.addFolder('Background');

    gui.addColor(this, 'backgroundColor').onChange((color) => {
      document.body.style.backgroundColor = color;
    });

    window.addEventListener('resize', this.onResize.bind(this), { passive: true });

    window.addEventListener('mousemove', this.onMouseMove.bind(this), { passive: true });

    this.onMouseMove({ clientX: 0, clientY: 0 });
  }

  const createScene= ()=> {
    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(this.renderer.domElement);
  }

  const createCamera= ()=>{
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 1);
    this.camera.position.set(0, 30, 0);

    this.scene.add(this.camera);
  }

  const addAmbientLight= ()=>{
    const obj = { color: '#2900af' };
    const light = new THREE.AmbientLight(obj.color, 1);

    this.scene.add(light);

    const gui = this.gui.addFolder('Ambient Light');

    gui.addColor(obj, 'color').onChange((color) => {
      light.color = hexToRgbTreeJs(color);
    });
  }

  const addSpotLight= ()=>{
    const obj = { color: '#e000ff' };
    const light = new THREE.SpotLight(obj.color, 1, 1000);

    light.position.set(0, 27, 0);
    light.castShadow = true;

    this.scene.add(light);

    const gui = this.gui.addFolder('Spot Light');

    gui.addColor(obj, 'color').onChange((color) => {
      light.color = hexToRgbTreeJs(color);
    });
  }

  const addRectLight= ()=>{
    const obj = { color: '#0077ff' };
    const rectLight = new THREE.RectAreaLight(obj.color, 1, 2000, 2000);

    rectLight.position.set(5, 50, 50);
    rectLight.lookAt(0, 0, 0);

    this.scene.add(rectLight);

    const gui = this.gui.addFolder('Rect Light');

    gui.addColor(obj, 'color').onChange((color) => {
      rectLight.color = hexToRgbTreeJs(color);
    });
  }

  const addPointLight=(color, position) =>{
    const pointLight = new THREE.PointLight(color, 1, 1000, 1);
    pointLight.position.set(position.x, position.y, position.z);

    this.scene.add(pointLight);
  }

  const getRandomGeometry= ()=>{
    return this.geometries[Math.floor(Math.random() * Math.floor(this.geometries.length))];
  }

  const  createGrid= ()=>{
    this.groupMesh = new THREE.Object3D();

    const meshParams = {
      color: '#ff00ff',
      metalness: .58,
      emissive: '#000000',
      roughness: .18,
    };

    const material = new THREE.MeshPhysicalMaterial(meshParams);
    const gui = this.gui.addFolder('Mesh Material');

    gui.addColor(meshParams, 'color').onChange((color) => {
      material.color = hexToRgbTreeJs(color);
    });
    gui.add(meshParams, 'metalness', 0.1, 1).onChange((val) => {
      material.metalness = val;
    });
    gui.add(meshParams, 'roughness', 0.1, 1).onChange((val) => {
      material.roughness = val;
    });

    for (let row = 0; row < this.grid.rows; row++) {
      this.meshes[row] = [];

      for (let col = 0; col < this.grid.cols; col++) {
        const geometry = this.getRandomGeometry();
        const mesh = this.getMesh(geometry.geom, material);

        mesh.position.set(col + (col * this.gutter.size), 0, row + (row * this.gutter.size));
        mesh.rotation.x = geometry.rotationX;
        mesh.rotation.y = geometry.rotationY;
        mesh.rotation.z = geometry.rotationZ;

        mesh.initialRotation = {
          x: mesh.rotation.x,
          y: mesh.rotation.y,
          z: mesh.rotation.z,
        };

        this.groupMesh.add(mesh);
        this.meshes[row][col] = mesh;
      }
    }

    const centerX = ((this.grid.cols - 1) + ((this.grid.cols - 1) * this.gutter.size)) * .5;
    const centerZ = ((this.grid.rows - 1) + ((this.grid.rows - 1) * this.gutter.size)) * .5;

    this.groupMesh.position.set(-centerX, 0, -centerZ);

    this.scene.add(this.groupMesh);
  }

  const getMesh =(geometry, material) => {
    const mesh = new THREE.Mesh(geometry, material);

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
  }

  const addCameraControls= ()=>{
    // this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  }

  const  addFloor= ()=>{
    const geometry = new THREE.PlaneGeometry(2000, 2000);
    const material = new THREE.ShadowMaterial({ opacity: .3 });

    this.floor = new THREE.Mesh(geometry, material);
    this.floor.position.y = 0;
    this.floor.rotateX(- Math.PI / 2);
    this.floor.receiveShadow = true;

    this.scene.add(this.floor);
  }

  const init= ()=>{
    this.setup();

    this.createScene();

    this.createCamera();

    this.addAmbientLight();

    this.addSpotLight();

    this.addRectLight();

    this.createGrid();

    this.addCameraControls();

    this.addFloor();

    this.animate();

    this.addPointLight(0xfff000, { x: 0, y: 10, z: -100 });

    this.addPointLight(0xfff000, { x: 100, y: 10, z: 0 });

    this.addPointLight(0x00ff00, { x: 20, y: 5, z: 20 });
  }

  const  onMouseMove=({ clientX, clientY })=> {
    this.mouse3D.x = (clientX / this.width) * 2 - 1;
    this.mouse3D.y = -(clientY / this.height) * 2 + 1;
  }

  const onResize= ()=>{
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  const  draw= ()=>{
    this.raycaster.setFromCamera(this.mouse3D, this.camera);

    const intersects = this.raycaster.intersectObjects([this.floor]);

    if (intersects.length) {
      const { x, z } = intersects[0].point;

      for (let row = 0; row < this.grid.rows; row++) {
        for (let col = 0; col < this.grid.cols; col++) {

          const mesh = this.meshes[row][col];

          const mouseDistance = distance(x, z,
            mesh.position.x + this.groupMesh.position.x,
            mesh.position.z + this.groupMesh.position.z);

          const y = map(mouseDistance, 6, 0, 0, 10);
          TweenMax.to(mesh.position, .2, { y: y < 1 ? 1 : y });

          const scaleFactor = mesh.position.y / 2.5;
          const scale = scaleFactor < 1 ? 1 : scaleFactor;

          TweenMax.to(mesh.scale, .4, {
            ease: Expo.easeOut,
            x: scale,
            y: scale,
            z: scale,
          });

          TweenMax.to(mesh.rotation, .5, {
            ease: Expo.easeOut,
            x: map(mesh.position.y, -1, 1, radians(45), mesh.initialRotation.x),
            z: map(mesh.position.y, -1, 1, radians(-90), mesh.initialRotation.z),
            y: map(mesh.position.y, -1, 1, radians(90), mesh.initialRotation.y),
          });
        }
      }
    }
  }

  const  animate= ()=>{
    this.controls.update();

    this.draw();

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.animate.bind(this));
  }


  const Marker = () => {
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
    )
  }

  const Microphone = () => {
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
    )

  }
  const Radio = () => {
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
    )
  }
  const Rings = () => {
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
    )
  }
  const Usb = () => {
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
    )
  }
  const Router = () => {
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
    )
  }
  const Duck = () => {
    return (
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
    )
  }
  const whistle = () => {
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
    )
  }
  
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <directionalLight
          intensity={0.7}
          decay={2}
          rotation={[-0.506, 0.629, 0.756]}
        />
       
        <Marker ref={earbuds} />
        {/* <Microphone ref={mic} />
        <Radio ref={radio} />
        <Rings ref={rings} />
        <Usb ref={usb} />
        
        <Router ref={router} />
        <Duck ref={duck} /> */}
       
        
       
       
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-499.971, 382.543, 779.591]}
          rotation={[-0.512, -0.565, -0.292]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/product-icons-1.glb");


