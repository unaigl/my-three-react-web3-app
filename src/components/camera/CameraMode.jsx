import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { CameraShake, OrbitControls, Html } from '@react-three/drei';

import CameraRig from './CameraRig';

const CameraMode = (props) => {

    const { camera } = useThree()

    useEffect(() => {
        // accesing private variables of the camera
        camera.rotation._x = 0;
        camera.rotation._y = 0;
        camera.rotation._z = 0;
        console.log('camera', camera)
        console.log('camera.rotation', camera.rotation)
        // setting camera rotation when camera mode is changed 
    }, [props.cameraMode])


    return (
        <>
            {props.cameraMode ? <div>< OrbitControls
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
            </div>
                :
                <div>
                    {/* Drei component, creates a balanced movement in our "camera" position */}
                    <CameraShake
                        yawFrequency={0.1}
                        pitchFrequency={0.1}
                        rollFrequency={0.1}
                    />
                    {/* Using "CameraRig", "camera" position reacts to our mouse movement */}
                    <CameraRig setmove={props.setmove} />
                </div>
            }
        </>
    )
}

export default CameraMode