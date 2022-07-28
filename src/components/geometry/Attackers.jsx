/* import { useSphere } from '@react-three/cannon';
import { useFrame, useLoader } from '@react-three/fiber';
import { Vector3 } from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import PropTypes from 'prop-types';

const Attackers = (props) => {

	const colorMap = useLoader(TextureLoader, props.texture)

	let zMovement = -40;

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
		if (props.play) {
			api.position.set(
				props.pos.x,
				props.pos.y,
				(zMovement += 0.1) - props.wait
			);
		}
	});

	if (props.play) {
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
			{props.play && <>
				<sphereGeometry attach='geometry' args={[1, 32, 32]} />
				<meshStandardMaterial map={colorMap} />
			</>}
		</mesh>
	);
};

Attackers.propTypes = {
	play: PropTypes.bool,
	pos: PropTypes.instanceOf(Vector3),
	wait: PropTypes.number,
	color: PropTypes.string,
	texture: PropTypes.string,
};

export default Attackers;
 */