import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center, OrbitControls } from '@react-three/drei'
import WatchModel from './WatchModel'
import PhoneModel from './PhoneModel'

const MainCanvas = () => {

  return (
    <Canvas style={{ background: '#1a1a1a', }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense
        // fallback={null} 
        fallback={
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        }
        // fallback={
        //   <div>
        //     Loading...
        //   </div>
        // }
      >
        <Center>
          <WatchModel />
          <PhoneModel />
        </Center>
      </Suspense>

    </Canvas>
  )
}

export default MainCanvas
