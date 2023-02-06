import { Html } from "@react-three/drei";
import React from "react";
import type { Vector3 } from "three";
import { dummyBlenders } from "../../data/dummyBlenders";
import BlenderPortfolio from "./BlenderItem";

interface I3DProps {
  zoomToSee: (value: Vector3) => void;
  gotoSection: (value: number) => void;
}

export default function BlenderSection({ zoomToSee, gotoSection }: I3DProps) {
  return (
    <group position={[0, 0, 0]}>
      <Html position={[20.2, 2.6, 0]} distanceFactor={2} transform>
        <div className="flex w-[90%] items-center justify-between space-x-10">
          <div className="text-4xl text-white">3D</div>
          <div
            className="w-48 text-center text-white"
            onClick={() => gotoSection(3)}
          >
            Click on box to zoom in
          </div>
          <div
            className="w-48 justify-center rounded-md border border-zinc-500 bg-zinc-800 p-2 text-center text-white"
            onClick={() => gotoSection(3)}
          >
            Go back to room
          </div>
        </div>
      </Html>
      {dummyBlenders.map((model) => (
        <BlenderPortfolio model={model} zoomToSee={zoomToSee} key={model.id} />
      ))}
    </group>
  );
}
