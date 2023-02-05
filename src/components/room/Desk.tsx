import { useGLTF, useTexture, Html } from "@react-three/drei";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    biurko: THREE.Mesh;
  };
  materials: {
    bakedPrinter: THREE.MeshBasicMaterial;
  };
};

export default function Desk() {
  const { nodes } = useGLTF("./roomDraco.glb") as GLTFResult;
  const bakedPrinter = useTexture("./room.jpg");

  return (
    <>
      <group>
        <mesh geometry={nodes.biurko.geometry}>
          <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
        </mesh>
      </group>
    </>
  );
}
