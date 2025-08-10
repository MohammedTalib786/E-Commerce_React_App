import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const PhoneModel = () => {

    const groupRef = useRef()
    const { scene } = useGLTF('/models/apple_iphone_13_pro_max_new.glb')

    useEffect(() => {
        // groupRef.current.rotation.x = 0.02
        groupRef.current.rotation.y = 60
        const handleScroll = () => {
            if (groupRef.current) {
                groupRef.current.rotation.x = window.scrollY * 0.002
                groupRef.current.rotation.y = window.scrollY * 0.01
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <group ref={groupRef} position={[2, 0, 0]} >
            <primitive object={scene.clone()} scale={3} />
        </group>
    )

}

export default PhoneModel
