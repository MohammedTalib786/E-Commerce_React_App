import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, useGLTF } from '@react-three/drei'


function IPhoneGLTF({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
    const { scene } = useGLTF('/models/iphone_15_pro_max.glb')
    // const { scene } = useGLTF('/models/free_iphone_13_pro_2021_orange.glb')
    return (
        <primitive
            object={scene.clone()}
            position={position}
            rotation={rotation}
        />)
}

const SingleIPhoneLook = () => {
    return (
        <Canvas style={{ background: '#fafafa', }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
                <Center>
                    {/* use group for front side show in first render */}
                    {/* <group rotation={[0, Math.PI / 2, 0]}>
                            <IPhoneGLTF />
                        </group> */}

                    {/* Main iPhone facing front */}
                    <IPhoneGLTF position={[0, 0, 0]} rotationY={Math.PI / 2} />
                    {/* Other instances */}

                </Center>
            </Suspense>
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
            />
        </Canvas>
    )
}

export default SingleIPhoneLook