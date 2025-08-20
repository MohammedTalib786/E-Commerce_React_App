import { Center } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import GlobeModel from './GlobeModel'

const MainCanvas = () => {
    return (
        <Canvas style={{
            background: 'transparent',
        }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Suspense
                fallback={null}
            >
                <Center>
                    <GlobeModel />
                </Center>
            </Suspense>

        </Canvas>
    )
}

export default MainCanvas