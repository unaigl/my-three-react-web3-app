import { CameraShake, OrbitControls } from '@react-three/drei';
import { Cloud, Sky, Html } from '@react-three/drei';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
// Mine
import '../App.css';
import { Lights } from './lights/Lights';
import CameraRig from './camera/CameraRig';
import Stars from './stars/Stars';
import Spawner from './geometry/Spawner';
import GltfLoader from './gltf/GltfLoader';



const Game = () => {

	const [play, setplay] = useState(true);
	const [cameraMove, setCameraMove] = useState(true);
	const [move, setmove] = useState({
		x: 0,
		y: 0,
		z: 0,
	});

	return (
		<div className='row'>
			<div className='col-lg-12 canvas'>
				<Suspense fallback={null}>
					<Canvas
						camera={{
							position: [0, 0, 0],
							// fov: 90,
							rotation: [0, 0, 0],
						}}>
						<Lights />

						{cameraMove ? <OrbitControls
							enableZoom={true}
							enablePan={true}
							enableRotate={true}
						/>
							:
							<>
								<CameraRig setmove={setmove} />
								<CameraShake
									yawFrequency={0.1}
									pitchFrequency={0.1}
									rollFrequency={0.1}
								/>
							</>
						}
						<GltfLoader url={'chair/armchairYellow.gltf'} position={[0, 0, -20]} setCameraMove={() => { setCameraMove(!cameraMove) }} />
						<Stars />
						<Sky distance={450000}
							sunPosition={[2, 1, 10]}
							inclination={0}
							azimuth={0.25} />
					</Canvas>
				</Suspense>
			</div>
		</div>
	);
}

export default Game
