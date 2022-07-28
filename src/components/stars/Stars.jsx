import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const StarsBG = () => {

	const ref = useRef();
	const ref2 = useRef();

	useFrame(() => {
		ref.current.rotation.y += 0.001
		ref2.current.rotation.y -= 0.0005
	})

	return (
		<>

			<Stars
				ref={ref}
				radius={4}
				depth={100}
				count={5000}
				factor={3}
				saturation={0.9}
				fade
				speed={.1}
				color={3}
			/>
			<Stars
				ref={ref2}
				radius={2}
				depth={200}
				count={5000}
				factor={3}
				saturation={0.9}
				fade
				speed={.2}
				color={3}
			/>
		</>
	);
}

export default StarsBG;

