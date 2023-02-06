import { Html, Image, Text } from "@react-three/drei";
import type { Vector3 } from "three";
import React from "react";
import type { I3D } from "../../@types/I3D";

interface BlenderProps {
  model: I3D;
  zoomToSee: (value: Vector3) => void;
}

export default function BlenderPortfolio({ model, zoomToSee }: BlenderProps) {
  return (
    <mesh
      position={model.position} //eslint-disable-line
      onClick={(e) => {
        zoomToSee(e.object.position);
      }}
    >
      <boxGeometry args={[2, 2, 0]} />
      <meshStandardMaterial
        color="#252529"
        metalness={0.5}
        roughness={0.5}
        envMapIntensity={2}
      />

      <Image position={[0, -0, 0.07]} scale={[2, 2]} url={model.image} />
    </mesh>
  );
}
