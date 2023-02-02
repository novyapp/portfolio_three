import { useGLTF, useTexture, Html } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import AnimatedCamera from "../AnimatedCamera";

type GLTFResult = GLTF & {
  nodes: {
    biurko: THREE.Mesh;
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
      <group>
        <Html position={[0, 4, 0]}>
          <div className="rounded-md bg-zinc-900 p-2 text-zinc-300">
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
