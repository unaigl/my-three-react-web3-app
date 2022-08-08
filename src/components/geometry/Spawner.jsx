import { Vector3 } from 'three';
import Bubble from './Bubble';


const Spawner = () => {


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

	return (
		<group>
			{attackersArray.map((attackers, key) => {
				return <Bubble
					key={key}
					pos={attackers[0]}
					wait={attackers[1]}
					color={attackers[2]}
				/>
			})}
		</group>
	);
};

export default Spawner;
