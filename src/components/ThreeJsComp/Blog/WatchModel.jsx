import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

const WatchModel = () => {
    const groupRef = useRef()
    const { scene } = useGLTF('/models/watch/apple_white_smart_watch.glb')

    // base values you can tweak
    const base = useRef({
        rotX: 0.3,      // initial X rotation (radians)
        rotY: 1.2,      // initial Y rotation (radians)
        posX: 0,       // initial X position
        posY: -1,        // initial Y position
        scale: 1      // initial scale
    })

    // refs used for runtime (no React re-renders)
    const scrollRef = useRef(0)
    const autoRotRef = useRef(0) // accumulates auto-rotation over time

    useEffect(() => {
        const g = groupRef.current
        if (g) {
            // set initial transform
            g.rotation.set(base.current.rotX, base.current.rotY, 0)
            g.position.set(base.current.posX, base.current.posY, 0)
            g.scale.set(base.current.scale, base.current.scale, base.current.scale)
        }

        // update scrollRef on scroll (passive for perf)
        const onScroll = () => (scrollRef.current = window.scrollY)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // frame loop: combine auto-rotation + scroll influence and lerp for smoothness
    useFrame((state, delta) => {
        const g = groupRef.current
        if (!g) return

        // auto-rotation speed (delta-based so it's frame-rate independent)
        autoRotRef.current += delta * 0.5 // tweak multiplier for speed

        const sY = scrollRef.current

        // how much scroll affects rotation/position (tweak these multipliers)
        const scrollRotX = sY * 0.0002
        const scrollRotY = sY * 0.002

        // const scrollPosY = sY * 0.0025
        const scrollPosY = sY * 0.0035
        const scrollPosX = sY * 0




        // scroll-based scale change (positive = grow, negative = shrink)
        const scrollScale = sY * 0.0015  // tweak for sensitivity



        // desired targets
        const targetX = base.current.rotX + scrollRotX
        const targetY = base.current.rotY + autoRotRef.current + scrollRotY
        const targetPosY = base.current.posY + scrollPosY
        const targetPosX = base.current.posX + scrollPosX

        const targetScale = base.current.scale + scrollScale

        // optional: clamp target rotations to avoid flipping
        // const clampedTargetX = MathUtils.clamp(targetX, -Math.PI/4, Math.PI/4)
        // const clampedTargetY = MathUtils.clamp(targetY, -Math.PI, Math.PI)

        // smooth towards targets
        g.rotation.x = MathUtils.lerp(g.rotation.x, targetX, 0.09)
        g.rotation.y = MathUtils.lerp(g.rotation.y, targetY, 0.09)
        g.position.y = MathUtils.lerp(g.position.y, targetPosY, 0.08)
        g.position.x = MathUtils.lerp(g.position.x, targetPosX, 0.08)


        // smooth scale (all axes equally)
        const smoothScale = MathUtils.lerp(g.scale.x, targetScale, 0.08)
        g.scale.set(smoothScale, smoothScale, smoothScale)

    })

    return (
        <group ref={groupRef} >
            <primitive object={scene.clone()}
                scale={16}
            // scale={50}
            />
        </group>
    )
}

export default WatchModel