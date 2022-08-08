import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { CameraShake, OrbitControls, Html } from '@react-three/drei';

import CameraRig from './CameraRig';

const CameraMode = (props) => {

    const { camera } = useThree()

    useEffect(() => {
        // @dev This code shows how to set camera rotation in case where variables were public
        // In this case, library has been built not to touch this variables due to internal algorithm
        // Even so, it still rotates the camera at a random "rotation"
        camera.rotation._x = 0;
        camera.rotation._y = 0;
        camera.rotation._z = 0;
        // setting camera rotation when camera mode is changed 
    }, [props.cameraMode])


    return (
        <>
            {props.cameraMode ? <>< OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
            />


                {/* HTML is added only in Orbitcontrols, because creates a conflict using with "CameraShake" or "CameraRig" */}
                < Html
                    as='h4'
                    position={[0, 0, -15]}
                    transform={true}
                >
                    <h4 className="htmlcanvas" >Click to switch between two different camera controls</h4>
                </Html >
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
                    <CameraRig setmove={props.setmove} />
                </>
            }
        </>
    )
}

export default CameraMode