import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from "@react-spring/three";
import { useEffect } from "react";

type GLTFResult = GLTF & {
  nodes: {
    krzesloTop: THREE.Mesh;
    krzesloBottom: THREE.Mesh;
  };
  materials: {
    bakedPrinter: THREE.MeshBasicMaterial;
  };
};

export default function Chair() {
  const { nodes } = useGLTF("/room.glb") as GLTFResult;
  const bakedPrinter = useTexture("./room.jpg");

  const [chair, apiChair] = useSpring(
    () => ({ "rotation-y": 2.2, config: { duration: 2000, friction: 10 } }),
    []
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const chair = () => {
      apiChair.start({
        "rotation-y": Math.random() * (3 - 2.2) + 2.2,
      }); // Math.random() * (max - min) + min);
      timeout = setTimeout(chair, (1 + Math.random() * 5) * 1000);
    };
    chair();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <group position={[0.1, 0.02, -0.2]}>
      <a.mesh
        geometry={nodes.krzesloTop.geometry}
        position={nodes.krzesloTop.position}
        rotation={[0, 2.2, 0]}
        {...chair}
      >
        <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
      </a.mesh>
      <mesh
        geometry={nodes.krzesloBottom.geometry}
        rotation={[0, 0, -Math.PI / 2]}
        position={[-0.2, 0.2, 0.6]}
      >
        <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
      </mesh>
    </group>
  );
}
