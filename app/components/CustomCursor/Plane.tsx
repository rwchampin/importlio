import {
    forwardRef
} from 'react'

import * as THREE from 'three'
const Plane = forwardRef((props, ref) => {

  return (

    <mesh
    ref={ref}
    position={[0, 0, -100]}
    visible={false}
    // receiveShadow
    
    // rotation={[-Math.PI / 2, 0,0]}
  >
    <planeGeometry args={[100, 100]} />
    <meshPhongMaterial color="white" side={THREE.DoubleSide} />
  </mesh>

    
  )
})

export default Plane;