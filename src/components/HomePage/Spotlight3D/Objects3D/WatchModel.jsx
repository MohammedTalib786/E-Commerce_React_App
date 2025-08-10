
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const WatchModel = () => {
    const groupRef = useRef()
    const { scene } = useGLTF('/models/watch/black_simple_watch.glb');

    useEffect(() => {
        // groupRef.current.rotation.x = .4
        const handleScroll = () => {
            if (groupRef.current) {
                groupRef.current.rotation.x = window.scrollY * 0.0002
                groupRef.current.rotation.y = window.scrollY * 0.015
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <group ref={groupRef} position={[-1, 0, 0]} >
            <primitive object={scene.clone()} scale={40} />
        </group>
    )
}

export default WatchModel

