import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    bg: THREE.Mesh;
  };
  materials: {
    bakedbg: THREE.MeshBasicMaterial;
  };
};

export default function Bg() {
  const { nodes } = useGLTF("./roomDraco.glb") as GLTFResult;
  const bakedbg = useTexture("./bg.jpg");

  return (
    <mesh geometry={nodes.bg.geometry} position={[0, -0.16, 0]}>
      <meshBasicMaterial map={bakedbg} map-flipY={false} />
    </mesh>
  );
}
