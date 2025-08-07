import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center, OrbitControls } from '@react-three/drei'

const WatchLook = () => {
    const groupRef = useRef()
    const { scene } = useGLTF('/models/apple_watch_ultra_orange.glb')

    // Auto-rotate on Y axis
    //   useFrame(() => {
    //     if (groupRef.current) {
    //       groupRef.current.rotation.x += 0.002
    //     }
    //   })

    // Rotate on scroll (X axis)


    // useEffect(() => {
    //     if (scene) {
    //         scene.scale.set(50, 50, 50)
    //     }
    // }, [scene])



    useEffect(() => {
        // groupRef.current.rotation.x = .4
        const handleScroll = () => {
            if (groupRef.current) {
                // groupRef.current.rotation.x = window.scrollY * 0.02
                groupRef.current.rotation.y = window.scrollY * 0.02
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <group ref={groupRef}>
            <primitive object={scene.clone()} scale={50} />
        </group>
    )
}

const WatchCanvas = () => {
    return (
        <Canvas style={{ background: '#fafafa', }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null} >
                <Center>
                    <WatchLook />
                </Center>
            </Suspense>
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                // minPolarAngle={Math.PI / 2} // locks vertical angle
                // maxPolarAngle={Math.PI / 2} // locks vertical angle
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
        </Canvas>
    )
}

export default WatchCanvas
