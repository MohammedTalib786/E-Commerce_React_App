// comps/ThreeJsComp/Blog/BackupWatchModel.jsx
// import { useGLTF } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber';
// import { useEffect, useRef } from 'react'

// const WatchModel = () => {
//     const groupRef = useRef()
//     // const { scene } = useGLTF('/models/watch/black_classic_watch.glb'); Not
//     // const { scene } = useGLTF('/models/watch/black_simple_watch.glb');
//     const { scene } = useGLTF('/models/watch/apple_white_smart_watch.glb');

//     // const { scene } = useGLTF('/models/apple_watch_ultra_orange.glb');

//     // Auto-rotate on every frame
//     useFrame(() => {
//         if (groupRef.current) {
//             groupRef.current.rotation.y += 0.002 // Adjust speed
//             // groupRef.current.rotation.y = scrollY * 0.001 // Adjust speed
//         }
//     })

//     useEffect(() => {
//         if (groupRef.current) {
//             groupRef.current.rotation.set(0.3, 0.5, 0) // X, Y, Z in radians
//         }

//         const handleScroll = () => {
//             if (groupRef.current) {
//                 // groupRef.current.rotation.y = window.scrollY * 0.0015
//                 // groupRef.current.rotation.x += 0.002
//                 groupRef.current.rotation.y += 0.025
//                 // groupRef.current.position +=
//             }
//         }

//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     return (
//         // <group ref={groupRef} position={[1, 0, 0]} scale={0.25} >
//         <group ref={groupRef} position={[1, 0, 0]} scale={15} >
//             <primitive object={scene.clone()}  />
//         </group>
//     )
// }

// export default WatchModel