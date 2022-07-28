import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraShake, OrbitControls, Sky, Html } from '@react-three/drei';

import './App.css';
import { Lights } from './lights/Lights';
import CameraRig from './camera/CameraRig';
import Stars from './stars/Stars';
import GltfLoader from './gltf/GltfLoader';

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
					}}>
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
						<GltfLoader url={'chair/armchairYellow.gltf'} position={[0, -5, -15]} setCameraMode={() => { setCameraMode(!cameraMode) }} />
					</Suspense>
					{/* Several lights types are implemented in canvas */}
					<Lights />

					{/* switch between two different camera controls */}
					{cameraMode ? <><OrbitControls
						enableZoom={true}
						enablePan={true}
						enableRotate={true}
					/>
						{/* HTML is added only in Orbitcontrols, because creates a conflict using with "CameraShake" or "CameraRig" */}
						<Html
							as='h4'
							position={[0, 0, -15]}
							transform={true}
						>
							<h4 className="htmlcanvas" >Click to switch between two different camera controls</h4>
						</Html>
					</>
						:
						<>
							{/* Drei component, creates a balanced movement in our "camera" position */}
							<CameraShake
								yawFrequency={0.1}
								pitchFrequency={0.1}
								rollFrequency={0.1}
							/>
							{/* Using "CameraRig", "camera" position reacts to our mouse movement */}
							<CameraRig setmove={setmove} />
						</>
					}
				</Canvas>
			</div>
		</div>
	);
}

export default App