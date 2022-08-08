import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon'

import './App.css';
import { Lights } from './lights/Lights';
import Stars from './stars/Stars';
import GltfLoader from './gltf/GltfLoader';
import ActivateSpawner from './geometry/ActivateSpawner';

import CameraMode from './geometry/CameraMode';


const App = () => {

	const [cameraMode, setCameraMode] = useState(true);
	const [move, setmove] = useState(undefined);


	return (
		<div className='row'>
			<div className='col-lg-12 canvas'>
				<Canvas
					camera={{
						position: [0, 0, 0],
						rotation: [0, 0, 0],
					}}

				>
					{/* Details in "Stars" component */}
					<Stars />
					{/* Drei component, creates a sky background (does not give ilumination to canvas elements) */}
					<Sky distance={450000}
						sunPosition={[2, 1, 10]}
						inclination={0}
						azimuth={0.25} />

					{/* While importing gltf model, we will cath it in a "Suspense" */}
					<Suspense fallback={null}>
						{/* Our "GltfLoader" component takes a "position" and "cameraMove" setter to switch between two different camera controls*/}
						<GltfLoader url={'chair/armchairYellow.gltf'} position={[0, -5, -15]} setCameraMode={() => {
							setCameraMode(!cameraMode);
						}} />
					</Suspense>
					{/* Several lights types are implemented in canvas */}
					<Lights />

					{/* switch between two different camera controls */}
					{/* "CameraMode" components uses "useThree" (fiber-hook) (and must be inside the canvas) */}
					<CameraMode cameraMode={cameraMode} setmove={setmove} />

					{!cameraMode &&
						< Physics >
							<ActivateSpawner />
						</Physics>
					}
				</Canvas>
			</div>
		</div>
	);
}

export default App