import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    room: THREE.Mesh;
  };
  materials: {
    bakedPrinter: THREE.MeshBasicMaterial;
  };
};

export default function Room() {
  const { nodes } = useGLTF("/room.glb") as GLTFResult;

  const bakedPrinter = useTexture("./room.jpg");

  return (
    <mesh geometry={nodes.room.geometry}>
      <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
    </mesh>
  );
}
