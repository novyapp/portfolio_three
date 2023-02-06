import { Html, Image, Text } from "@react-three/drei";
import type { Vector3 } from "three";
import React from "react";
import type { IWebsite } from "../../@types/IWebsite";

interface WebsiteProps {
  website: IWebsite;
  zoomToSee: (value: Vector3) => void;
}

export default function WebsitePortfolio({ website, zoomToSee }: WebsiteProps) {
  return (
    <mesh
      scale={[1.5, 1.8, 0.15]}
      position={website.position} //eslint-disable-line
      onClick={(e) => {
        zoomToSee(e.object.position);
      }}
    >
      <boxGeometry />
      <meshStandardMaterial
        color="#252529"
        metalness={0.5}
        roughness={0.5}
        envMapIntensity={2}
      />

      <Image
        position={[0, 0.26, 0.51]}
        scale={[0.9, 0.4]}
        url={website.image}
      />

      <Html
        position={[-0.3, -0.08, 0.3]}
        distanceFactor={2}
        transform
        scale={0.4}
      >
        <div className="flex w-full space-x-2">
          <div className="rounded-md border border-zinc-600 p-2 py-1 text-xs text-white">
            Github
          </div>
          <div className="rounded-md border border-zinc-600 p-2 py-1 text-xs text-white">
            Online
          </div>
        </div>
      </Html>
      <Text
        position={[-0.43, 0, 0.51]}
        fontSize={0.05}
        maxWidth={0.8}
        anchorX="left"
        anchorY="middle"
        textAlign={"left"}
      >
        {website.title}
      </Text>
      <Text
        position={[-0.42, -0.15, 0.51]}
        fontSize={0.03}
        maxWidth={0.8}
        anchorX="left"
        anchorY="top"
        textAlign={"left"}
      >
        {website.description}
      </Text>
    </mesh>
  );
}
