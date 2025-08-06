import React from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box() {
    return (
        <mesh rotation={[45, 45, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="skyblue" />
        </mesh>
    )
}

const ThreeScene = () => {
    return (
        <Canvas style={{ width: "100%", height: "100%" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Box />
            <OrbitControls />
        </Canvas>
    )

}

export default ThreeScene