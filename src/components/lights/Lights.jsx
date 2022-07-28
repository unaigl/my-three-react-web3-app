import { useFrame } from '@react-three/fiber';
import { useRef } from 'react'

export const Lights = () => {

	const ref = useRef();
	useFrame(() => {
		// give rotation to the ilumination
		ref.current.rotation.y -= 0.005
	})

	return (
		<group
			ref={ref}>
			{/* Ambient Light illuminates lights for all objects */}
			<ambientLight intensity={0.3} />
			{/* Diretion light */}
			<directionalLight position={[10, 10, 5]} intensity={1} />
			<directionalLight
				castShadow
				position={[0, 10, 0]}
				intensity={1.5}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-far={50}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
			/>
			{/* Spotlight Large overhead light */}
			<spotLight intensity={1} position={[1000, 0, 0]} castShadow />
		</group>
	);
};
