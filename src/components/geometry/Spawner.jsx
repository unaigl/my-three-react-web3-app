import { Vector3 } from 'three';
import Attackers from './Attackers';
import { useBox } from '@react-three/cannon';
import { useState } from 'react';


const Spawner = (props) => {

	const [play, setPlay] = useState(false);


	function randomIntBetween(min, max) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	function randomIntBetweenAlsoNegatives(min, max) { // min and max included 
		const math = Math.floor(Math.random() * (max - min + 1) + min)
		const random = Math.random()
		const zeroOrOne = Math.round(random)
		if (zeroOrOne) return -(math)
		return math
	}

	const attackersArray = [];

	for (let i = 0; i < 20; i++) {

		let position = new Vector3(
			randomIntBetweenAlsoNegatives(0, 2),
			randomIntBetweenAlsoNegatives(0, 2),
			0)

		let wait = randomIntBetween(1, 12) * 10

		let color = `#${Math.random().toString(16).substring(2, 8)}`

		const att = [position, wait, color]
		attackersArray.push(att)
	}

	// This box is used to start the game
	const [ref, api] = useBox(() => ({
		mass: 0,
		position: [0, 10, 0],
		type: 'Dynamic',
		args: [1, 1, 1],
	}));

	return (
		<group>
			<mesh
				ref={ref}
				onClick={() => { console.log('firstAttackers') }}
			>
				<boxGeometry attach='geometry' args={[1, 1, 1]} />
				<meshStandardMaterial attach="material" color={'#000'} />
			</mesh>

			{attackersArray.map((attackers, key) => {
				return <Attackers
					key={key}
					pos={attackers[0]}
					wait={attackers[1]}
					color={attackers[2]}
					cameraMode={props.cameraMode}
				/>
			})}
		</group>
	);
};

export default Spawner;
