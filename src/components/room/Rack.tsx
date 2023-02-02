import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    rack: THREE.Mesh;
  };
  materials: {
    bakedPrinter: THREE.MeshBasicMaterial;
  };
};

export default function Desk() {
  const { nodes } = useGLTF("/room.glb") as GLTFResult;
  const bakedPrinter = useTexture("./room.jpg");

  return (
    <>
      <group rotation={[0, 0, -Math.PI / 2]} position={[0.2, 0.05, -2.57]}>
        <mesh geometry={nodes.rack.geometry}>
          <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
        </mesh>
      </group>
    </>
  );
}
