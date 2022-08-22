import React from "react";
import { useBox } from "@react-three/cannon";
import { useState } from "react";

import Spawner from "./Spawner";
import PlayerBox from "./PlayerBox";

const ActivateSpawner = () => {
    const [play, setPlay] = useState(false);

    // This box is used to start the game
    const [ref] = useBox(() => ({
        mass: 0,
        position: [-5, 2, -10],
        type: "Dynamic",
        args: [1, 1, 1]
    }));

    return (
        <group>
            <mesh
                ref={ref}
                onClick={() => {
                    console.log(!play);
                    setPlay(!play);
                }}
            >
                <boxGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" color={"#000"} />
            </mesh>
            {play && (
                <>
                    <Spawner />
                    <PlayerBox setPlay={setPlay} />
                </>
            )}
        </group>
    );
};

export default ActivateSpawner;
