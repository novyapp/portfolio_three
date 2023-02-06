import { Html, MeshReflectorMaterial } from "@react-three/drei";
import React from "react";
import type { Vector3 } from "three";
import { dummyWebsites } from "../../data/dummyWebsites";
import WebsitePortfolio from "./WebsiteItem";

interface WebsiteProps {
  zoomToSee: (value: Vector3) => void;
  gotoSection: (value: number) => void;
}

export default function WebsitesSection({
  zoomToSee,
  gotoSection,
}: WebsiteProps) {
  return (
    <group position={[0, 0, 0]}>
      <Html position={[33.2, 2.5, 0]} distanceFactor={2} transform>
        <div className="flex w-[90%] items-center justify-between space-x-10">
          <div className="text-4xl text-white">Websites</div>
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
      {dummyWebsites.map((website) => (
        <WebsitePortfolio
          website={website}
          zoomToSee={zoomToSee}
          key={website.id}
        />
      ))}
    </group>
  );
}
