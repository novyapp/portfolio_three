import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    plant: THREE.Mesh;
  };
  materials: {
    bakedPrinter: THREE.MeshBasicMaterial;
  };
};

export default function Plant() {
  const { nodes } = useGLTF("./roomDraco.glb") as GLTFResult;
  const bakedPrinter = useTexture("./room.jpg");

  return (
    <>
      <mesh geometry={nodes.plant.geometry} position={[-2.35, -0.15, -2.45]}>
        <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
      </mesh>
    </>
  );
}
