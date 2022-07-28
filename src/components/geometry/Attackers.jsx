import { useSphere } from '@react-three/cannon';
import { useFrame, useLoader } from '@react-three/fiber';
import { Vector3 } from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import PropTypes from 'prop-types';

const Attackers = (props) => {

	let zMovement = -20;

	const [ref, api] = useSphere(() => ({
		mass: 0,
		position: [props.pos.x, props.pos.y, props.pos.z - 200],
		type: 'Dynamic',
		// args: [1, 1, 1],
		// 1 PlayerBox 2 Objetive 3 BulletBox 4 Attackers
		collisionFilterGroup: 4,
		// No te va a colisionar, sino que vas a colisionar contra el
		collisionFilterMask: 1,
	}));

	useFrame(() => {
		api.position.set(
			props.pos.x,
			props.pos.y,
			(zMovement += 0.1) - props.wait
		);
	});

	if (props.cameraMode) {
		for (let i = 1; i < 20; i++) {
			window.setTimeout(() => {
				zMovement = -50;
				api.position.set(0, 0, -zMovement);
				// 6 segs * i * wait= posicion de cada cubo para hacer que algunos salgan antes que otros
			}, 6 * 1000 + props.wait * 100);
		}
	}

	return (
		<mesh ref={ref}>
			{props.cameraMode && <>
				<sphereGeometry attach='geometry' args={[1, 32, 32]} />
				<meshStandardMaterial attach="material" color={props.color} />
			</>}
		</mesh>
	);
};

export default Attackers;
