import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    booSmall: THREE.Mesh;
    booBig: THREE.Mesh;
  };
  materials: {
    bakedPrinter: THREE.MeshBasicMaterial;
  };
};

export default function Boo() {
  const { nodes } = useGLTF("./roomDraco.glb") as GLTFResult;
  const bakedPrinter = useTexture("./room.jpg");

  return (
    <group position={[0.75, 2.6, -2.55]}>
      <mesh
        geometry={nodes.booSmall.geometry}
        position={[-0.35, 0, 0]}
        rotation={[0, Math.PI / 8, 0]}
      >
        <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.booBig.geometry}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 8, 0]}
      >
        <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
      </mesh>
    </group>
  );
}
