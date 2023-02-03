import React, { useRef, useState, Suspense } from "react";
import {
  Center,
  CameraControls,
  PerspectiveCamera,
  Loader,
} from "@react-three/drei";
import type { Group, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { Room, Desk, Rack, Printer, Chair, Bg, Plant, Boo } from "./room";
import { useControls } from "leva";
import * as THREE from "three";
import WebsitesSection from "./sections/WebsitesSection";

interface MainModelProps {
  setLep: (value: boolean) => void;
  lep: boolean;
  setBlen: (value: boolean) => void;
  blen: boolean;
}

function Experience({ setLep, lep, blen, setBlen }: MainModelProps) {
  const meshRef = useRef<Group>(null!);
  const cameraControlsRef = useRef<CameraControls>(null!);

  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState<THREE.Vector3>(null!);

  const pos = new THREE.Vector3();
  const look = new THREE.Vector3();

  const { posX, posY, posZ, lookX, lookY, lookZ } = useControls({
    lookX: {
      value: 33.1,
      step: 0.1,
    },
    lookY: {
      value: -2,
      step: 0.1,
    },
    lookZ: {
      value: -6.5,
      step: 0.1,
    },
    posX: {
      value: 33.3,
      step: 0.1,
    },
    posY: {
      value: -0.6,
      step: 0.1,
    },
    posZ: {
      value: 4.6,
      step: 0.1,
    },
  });

  useFrame((state, delta) => {
    zoom ? pos.set(focus.x, focus.y, focus.z + 2.2) : pos.set(8, 8, 8);
    zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0, 0, 0);

    lep && !zoom && look.set(lookX, lookY, lookZ);
    lep && !zoom && pos.set(posX, posY, posZ);

    state.camera.position.lerp(pos, 0.5);
    state.camera.updateProjectionMatrix();

    cameraControlsRef.current.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true
    );
    return cameraControlsRef.current.update(delta);
  });

  return (
    <>
      <CameraControls ref={cameraControlsRef} enabled={false} />
      <PerspectiveCamera makeDefault />
      <WebsitesSection
        setLep={setLep}
        zoomToView={(focusRef: React.SetStateAction<Vector3>) => (
          setZoom(!zoom), setFocus(focusRef)
        )}
      />

      <Center>
        <group ref={meshRef}>
          <Bg />
          <Room />
          <group position={[-2.26, 1.63, 0.75]}>
            <Desk setLep={setLep} />
            <Printer />
          </group>
          <Rack />
          <Chair />
          <Plant />
          <Boo />
        </group>
      </Center>
    </>
  );
}

export default Experience;
