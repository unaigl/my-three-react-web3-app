import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

// Using "CameraRig", "camera" position reacts to our mouse movement
// "CameraMode" components uses "useThree" (fiber-hook) (and must be inside the canvas)

function CameraRig(props) {
  const vec = new Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    // using "lerp" algorithm To do a linear interpolation between three variables (x,y,z) and  given a fraction (0.05 in this case)
    camera.position.lerp(vec.set(mouse.x * 20, mouse.y * 20, mouse.z), 0.05);
    props.setmove(camera.position);
  });
}

export default CameraRig;
