import { Vector3 } from 'three';
// import Attackers from './Attackers';
import PropTypes from 'prop-types';
import { useFrame, useLoader } from '@react-three/fiber';

const Spawner = (props) => {
	// TODO No permite usar los valores de useContext fuera del componente Spawner. Y si esta dentro, no permite exportarlo

	// Random number between
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
		const att = [
			new Vector3(
				randomIntBetweenAlsoNegatives(0, 2),
				randomIntBetweenAlsoNegatives(0, 2),
				0),
			randomIntBetween(1, 12) * 10
		]
		attackersArray.push(att)
	}

	return (
		<group>
			{/* {attackersArray.map((attackers, key) => {
				return <Attackers
					key={key}
					pos={attackers[0]}
					wait={attackers[1]}
					color={attackers[2]}
					play={props.play}
					texture={`/photos/${randomIntBetween(1, 16)}.jpg`}

				/>
			})} */}
		</group>
	);
};

Spawner.propTypes = {
	play: PropTypes.bool,
}

export default Spawner;
