import { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import type THREE from "three";

type GLTFResult = GLTF & {
  nodes: {
    printer_bed: THREE.Mesh;
    printer: THREE.Mesh;
    printer_extruder: THREE.Mesh;
  };
  materials: {
    ["bakedTexture"]: THREE.MeshBasicMaterial;
  };
};

export default function Printer() {
  const { nodes } = useGLTF("./roomDraco.glb") as GLTFResult;
  const bakedPrinter = useTexture("./room.jpg");

  const [extruder, apiExtruder] = useSpring(
    () => ({ "position-z": 0, config: { friction: 50 } }),
    []
  );

  const [bed, apiBed] = useSpring(
    () => ({ "position-x": 0, config: { friction: 50 } }),
    []
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const extruder = () => {
      apiExtruder.start({ "position-z": Math.random() * (0.2 - -0.2) + -0.2 }); // Math.random() * (max - min) + min);
      timeout = setTimeout(extruder, (1 + Math.random() * 5) * 300);
    };
    extruder();

    const bed = () => {
      apiBed.start({ "position-x": Math.random() * (0.3 - -0.1) + -0.1 }); // Math.random() * (max - min) + min);
      timeout = setTimeout(bed, (1 + Math.random() * 5) * 300);
    };
    bed();

    return () => clearTimeout(timeout);
  }, [apiExtruder, apiBed]);

  return (
    <group position={[-0.2, 0.2, 1.62]}>
      <a.mesh
        geometry={nodes.printer_bed.geometry}
        position={[0, 0.07, 0]}
        {...bed}
      >
        <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
      </a.mesh>
      <a.mesh
        geometry={nodes.printer_extruder.geometry}
        position={[0.15, 0.25, 0]}
        {...extruder}
      >
        <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
      </a.mesh>
      <mesh geometry={nodes.printer.geometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial map={bakedPrinter} map-flipY={false} />
      </mesh>
    </group>
  );
}
