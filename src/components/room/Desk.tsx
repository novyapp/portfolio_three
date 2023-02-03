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

interface DeskProps {
  setLep: (value: boolean) => void;
}

export default function Desk({ setLep }: DeskProps) {
  const { nodes } = useGLTF("./roomDraco.glb") as GLTFResult;
  const bakedPrinter = useTexture("./room.jpg");

  return (
    <>
      <group>
        <Html position={[0, 4, 0]}>
          <div
            className="rounded-md bg-zinc-900 p-2 text-zinc-300"
            onClick={() => {
              setLep(true);
            }}
          >
            Websites
          </div>
        </Html>

        <mesh geometry={nodes.biurko.geometry}>
          <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
        </mesh>
      </group>
    </>
  );
}
