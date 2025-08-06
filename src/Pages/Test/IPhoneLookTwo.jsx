import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, useGLTF } from '@react-three/drei'



function IPhoneGLTFTwo() {
    // const { scene } = useGLTF('/models/iphone_15_pro_max.glb')
    const { scene } = useGLTF('/models/free_iphone_13_pro_2021_orange.glb')
    return <primitive object={scene} scale={1} />
}

const IPhoneLookTwo = () => {
    return (
        <Canvas style={{ background: '#fafafa' }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
                <Center>
                    <IPhoneGLTFTwo />
                </Center>
            </Suspense>
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                // minPolarAngle={Math.PI / 2}
                // maxPolarAngle={Math.PI / 2}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
            />
        </Canvas>
    )
}

export default IPhoneLookTwo