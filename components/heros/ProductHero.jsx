import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { ProductIcons1 } from '@/components/3d'
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

  const meshes = [
    new Torus(),
    new Box(),
    new Cone(),
    ];
  const Products = () => {
    const  createGrid= ()=>{
        this.groupMesh = new THREE.Object3D();
    
        const meshParams = {
          color: '#ff00ff',
          metalness: .58,
          emissive: '#000000',
          roughness: .18,
        };
    

       
    
        for (let row = 0; row < grid.rows; row++) {
    
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
    
  }
export default function ProductHero() {

    return (
        <div className="absolute h-screen w-full">
            <Canvas>
                <OrbitControls />
                <Stars />
                <ambientLight intensity={0.5} color="blue" />
                <spotLight position={[10, 15, 10]} angle={0.3} />
                {/* {for(let x = 0; x < 10; x++) {
                    for(let y = 0; y < 10; y++) {
                        const mesh = meshes[Math.floor(Math.random() * meshes.length)];
                        <mesh
                            geometry={mesh.geom}
                            position={[x, y, 0]}
                            rotation={[mesh.rotationX, mesh.rotationY, mesh.rotationZ]}
                            >
                                <meshStandardMaterial color="hotpink" />
                                </mesh>
                    }}} */}

            </Canvas>
        </div>
    )
}