import { useGLTF } from "@react-three/drei";

function GltfLoader(props) {
  const gltf = useGLTF(props.url, "/draco-gltf");
  useGLTF.preload(props.url);
  return (
    <primitive
      scale={0.05}
      object={gltf.scene}
      dispose={null}
      position={props.position}
      onClick={props.setCameraMove}
    />
  );
}
export default GltfLoader;