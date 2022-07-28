import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { Vector3 } from "three";
import PropTypes from "prop-types";

// Funcion que permite mantener la camara constantemente en movimiento (balanceandose)
function CameraRig(props) {
  const vec = new Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    // este vector "vec", en su parametro z es el que hace que la camara este constantemente en el 7.
    camera.position.lerp(vec.set(mouse.x * 20, mouse.y * 20, mouse.z), 0.05);
    props.setmove(camera.position);
  });
}

CameraRig.propTypes = {
  setmove: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default CameraRig;
