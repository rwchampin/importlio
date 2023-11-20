"use client";

import * as THREE from 'three';
import vertex from './shaders/vertexParticles.glsl';
import fragment from './shaders/fragment.glsl';
import simVertex from './shaders/simVertex.glsl';
import simFragment from './shaders/simFragment.glsl';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Float } from '@react-three/drei';

export default class Sketch {
    constructor(options) {
        this.scene = new THREE.Scene();
        this.container = options.dom;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.pointer = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0x000000, 1);

        // this.ambientLight = new THREE.AmbientLight(0xffffff,.9);
        this.container.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.001, 1000);


        this.camera.position.set(0, 0, 4);
        this.scene.add(this.camera);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.time = 0;
        this.scale = false;
        this.isPlaying = true;
        this.addEventListener();
        this.setupFBO();
        this.addObjects();
        this.resize();
        this.render();
    }

    onMouseMove(e) {
        this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = - (e.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersects = this.raycaster.intersectObjects([this.dummy]);
        if (intersects.length > 0) {
            const { x, y } = intersects[0].point;
            this.fboMaterial.uniforms.uMouse.value = new THREE.Vector2(x, y);
            this.ball.position.set(x,y,0);
        }
    }

    addEventListener() {
        this.ball = new THREE.Mesh(
            new THREE.SphereGeometry(0.051, 32, 32),
            new THREE.MeshBasicMaterial({
                color: 0x8B0000
            })
        )

        this.ball.position.set(-100, 0, 0);
        this.scene.add(this.ball);
        this.dummy = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshBasicMaterial()
        )

       
        document.addEventListener('mousemove', this.onMouseMove.bind(this), { passive: false });
    }

    setupResize() {
        window.addEventListener('resize', this.resize.bind(this))
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    getRenderTarget() {
        const renderTarget = new THREE.WebGLRenderTarget(this.width, this.height, {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
        })
        return renderTarget;

    }

    setupFBO() {
        this.size = 256;
        this.fbo = this.getRenderTarget();
        this.fbo1 = this.getRenderTarget();

        this.fboScene = new THREE.Scene();
        this.fboCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
        this.fboCamera.position.set(0, 0, .5);
        this.fboCamera.lookAt(0, 0, 0);
        let geometry = new THREE.PlaneGeometry(2, 2);

        this.data = new Float32Array(this.size * this.size * 4);

        for (let i = 0; i < this.size * this.size * 4; i++) {
            for (let j = 0; j < 4; j++) {
                let index = (i + j * this.size) * 4;
                let theta = Math.random() * Math.PI * 2;
                let r = 0.5 * 0.5 * Math.random();
                this.data[index + 0] = r * Math.cos(theta);
                this.data[index + 1] = r * Math.sin(theta);
                this.data[index + 2] = 0;
                this.data[index + 3] = 0;
            }
        }

        this.fboTexture = new THREE.DataTexture(this.data, this.size, this.size, THREE.RGBAFormat, THREE.FloatType);
        this.fboTexture.magFilter = THREE.NearestFilter;
        this.fboTexture.minFilter = THREE.NearestFilter;
        this.fboTexture.needsUpdate = true;


        this.fboMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uPositions: { value: this.fboTexture },
                time: { value: 0 },
                uInfo: { value: null },
                uMouse: { value: new THREE.Vector2(-100, -100) },
            },
            transparent: true,
            vertexShader: simVertex,
            fragmentShader: simFragment
        });

        this.infoArray = new Float32Array(this.size * this.size * 4);

        for (let i = 0; i < this.size * this.size * 4; i++) {
            for (let j = 0; j < 4; j++) {
                let index = (i + j * this.size) * 4;
                this.infoArray[index + 0] = .5 * Math.random();
                this.infoArray[index + 1] = .5 * Math.random();
                this.infoArray[index + 2] = 0;
                this.infoArray[index + 3] = 0;
            }
        }

        this.info = new THREE.DataTexture(this.infoArray, this.size, this.size, THREE.RGBAFormat, THREE.FloatType);
        this.info.magFilter = THREE.NearestFilter;
        this.info.minFilter = THREE.NearestFilter;
        this.info.needsUpdate = true;
        this.fboMaterial.uniforms.uInfo.value = this.info;

        this.fboMesh = new THREE.Mesh(geometry, this.fboMaterial);
        this.fboMesh.scale.set(0, 0, 0);
        this.fboScene.add(this.fboMesh);

        this.renderer.setRenderTarget(this.fbo);
        this.renderer.render(this.fboScene, this.fboCamera);
        this.renderer.setRenderTarget(this.fbo1);
        this.renderer.render(this.fboScene, this.fboCamera);
    }

    addObjects() {
        this.material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: '#extension GL_OES_standard_derivatives : enable'
            },
            side: THREE.DoubleSide,
            uniforms: {
                time: { value: 0 },
                uPositions: { value: null },
                resolution: { value: new THREE.Vector4() },
            },
            // wireframe:true,
            vertexShader: vertex,
            fragmentShader: fragment
        })

        this.count = this.size ** 2;
        let geometry = new THREE.BufferGeometry();
        let postitions = new Float32Array(this.count * 3);
        let uv = new Float32Array(this.count * 2);

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                let index = (i + j * this.size);
                postitions[index * 3 + 0] = Math.random();
                postitions[index * 3 + 1] = Math.random();
                postitions[index * 3 + 2] = 0;

                uv[index * 2 + 0] = i / this.size;
                uv[index * 2 + 1] = j / this.size;
            }
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(postitions, 3));
        geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));

        this.material.uniforms.uPositions.value = this.fboTexture;




        this.points = new THREE.Points(geometry, this.material);


        this.scene.add(this.points);
    }

    start() {
        this.isPlaying = true;
        this.time = 0;
        this.render();
    }

    stop() {
        this.isPlaying = false;
    }

    destroy() {
        this.renderer.domElement.remove();
    }

    render() {
        if (!this.isPlaying) return;

        this.time += 0.05;
        this.material.uniforms.time.value = this.time;
        this.fboMaterial.uniforms.time.value = this.time;
        requestAnimationFrame(this.render.bind(this));

        this.fboMaterial.uniforms.uPositions.value = this.fbo1.texture;
        this.material.uniforms.uPositions.value = this.fbo.texture;

        // if ( this.scale === true) {
        //     this.fboMesh.scale.x -= 0.001;
        //     this.fboMesh.scale.y -= 0.001;
        //     this.fboMesh.scale.z -= 0.001;
        // } 
        console.log(this.fboMesh.scale.x);
            if(this.scale === false)
        {

                this.fboMesh.scale.x += 0.001;
                this.fboMesh.scale.y += 0.001;
                this.fboMesh.scale.z += 0.001;
        }

        this.renderer.setRenderTarget(this.fbo);
        this.renderer.render(this.fboScene, this.fboCamera);
        this.renderer.setRenderTarget(null);
        this.renderer.render(this.scene, this.camera);

        let tmp = this.fbo;
        this.fbo = this.fbo1;
        this.fbo1 = tmp;

    }
}

