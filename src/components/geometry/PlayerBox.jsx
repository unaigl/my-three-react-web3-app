import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";

const PlayerBox = (props) => {
	const { camera } = useThree();

	const [ref, api] = useBox(() => ({
		mass: 0,
		type: "Dynamic",
		position: [0, 0, -5],
		args: [0.3, 0.3, 0.1], // collision box size
		// 1 PlayerBox 2 Objetive 3 BulletBox 4 Attackers
		collisionFilterGroup: 1,
		// collide with
		collisionFilterMask: 4,
		onCollide: (e) => {
			props.setPlay(false);
			console.log("game over");
		}
	}));

	// Tambien simula el movimiento de la camara (y por lo tnato el del objetivo), para poder tener un collider para el game over
	useFrame(() => {
		api.position.set(camera.position.x, camera.position.y, -2);
	});

	return (
		<>
			<mesh ref={ref}>
				<boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />{" "}
				{/* box size */}
				<meshStandardMaterial attach="material" color={"#000"} />
			</mesh>
		</>
	);
};

export default PlayerBox;
