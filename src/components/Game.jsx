import { CameraShake, OrbitControls } from '@react-three/drei';
import { Cloud, Sky } from '@react-three/drei';

import { Canvas } from '@react-three/fiber';
import * as React from "react";
import { Suspense } from 'react';
// Mine
import '../App.css';
import { Lights } from './lights/Lights';
import CameraRig from './camera/CameraRig';
import Stars from './stars/Stars';
import HtmlCanvas from './text/HtmlCanvas';
import Spawner from './geometry/Spawner';

const Game = () => {

	const [play, setplay] = React.useState(true);
	const [move, setmove] = React.useState({
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
						<CameraShake
							yawFrequency={0.1}
							pitchFrequency={0.1}
							rollFrequency={0.1}
						/>
						{/* <OrbitControls
							enableZoom={true}
							enablePan={true}
							enableRotate={true}
						/> */}
						<Lights />

						{/* <HtmlCanvas> MOVE! </HtmlCanvas> */}

						<CameraRig setmove={setmove} />
						{/* <Spawner play={play} setplay={setplay} /> */}
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