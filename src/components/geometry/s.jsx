import { Physics, useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber';

const Box = () => {

    const [ref, api] = useBox(() => ({ mass: 1 }))

    useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0))

    const velocity = useRef([0, 0, 0])
    useEffect(() => {
        const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v))
        return unsubscribe
    }, [])

    return (
        <Physics>
            <mesh ref={ref}>
                <boxGeometry attach='geometry' args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" color={'#000'} />
            </mesh>

        </Physics>
    )
}

export default Box