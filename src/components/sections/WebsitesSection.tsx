import { Html, MeshReflectorMaterial } from "@react-three/drei";
import React from "react";
import { Vector3 } from "three";
import { dummyWebsites } from "../../data/dummyWebsites";
import WebsitePortfolio from "./WebsitePortfolio";

interface IWebsite {
  setLep: (value: boolean) => void;
  zoomToView: (value: Vector3) => void;
}

export default function WebsitesSection({ zoomToView, setLep }: IWebsite) {
  return (
    <group position={[0, 0, 0]}>
      <Html position={[33.2, 0.6, -1]} distanceFactor={2} transform>
        <div className="flex w-[90%] items-center justify-between space-x-10">
          <div className="text-4xl text-white">Websites</div>
          <div
            className="w-48 text-center text-white"
            onClick={() => setLep(false)}
          >
            Click on box to zoom in
          </div>
          <div
            className="w-48 justify-center rounded-md border border-zinc-500 bg-zinc-800 p-2 text-center text-white"
            onClick={() => setLep(false)}
          >
            Go back to room
          </div>
        </div>
      </Html>
      {dummyWebsites.map((website) => (
        <WebsitePortfolio
          website={website}
          zoomToView={zoomToView}
          key={website.id}
        />
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[30, -2, 0]}>
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
          mirror={1}
        />
      </mesh>
    </group>
  );
}
