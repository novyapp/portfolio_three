import React, { useRef, useState, Suspense } from "react";
import { Center, CameraControls, PerspectiveCamera } from "@react-three/drei";
import type { Group, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { Room, Desk, Rack, Printer, Chair, Bg, Plant, Boo } from "./room";
import { useControls } from "leva";
import * as THREE from "three";
import WebsitesSection from "./sections/WebsitesSection";
import BlenderSection from "./sections/BlenderSection";

interface MainModelProps {
  setLep: (value: boolean) => void;
  lep: boolean;
  setBlenderSection: (value: boolean) => void;
  blenderSection: boolean;
}

function Experience({
  setLep,
  lep,
  blenderSection,
  setBlenderSection,
}: MainModelProps) {
  const meshRef = useRef<Group>(null!);
  const cameraControlsRef = useRef<CameraControls>(null!);

  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState<THREE.Vector3>(null!);

  const pos = new THREE.Vector3();
  const look = new THREE.Vector3();

  const {
    posX,
    posY,
    posZ,
    lookX,
    lookY,
    lookZ,
    pos2X,
    pos2Y,
    pos2Z,
    look2X,
    look2Y,
    look2Z,
  } = useControls({
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
    look2X: {
      value: 20,
      step: 0.1,
    },
    look2Y: {
      value: -2,
      step: 0.1,
    },
    look2Z: {
      value: -6.5,
      step: 0.1,
    },
    pos2X: {
      value: 20,
      step: 0.1,
    },
    pos2Y: {
      value: 0,
      step: 0.1,
    },
    pos2Z: {
      value: 4,
      step: 0.1,
    },
  });

  useFrame((state, delta) => {
    zoom ? pos.set(focus.x, focus.y, focus.z + 2.2) : pos.set(7, 7, 7);
    zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0, 0, 0);

    lep && !zoom && look.set(lookX, lookY, lookZ);
    lep && !zoom && pos.set(posX, posY, posZ);

    blenderSection && !zoom && look.set(look2X, look2Y, look2Z);
    blenderSection && !zoom && pos.set(pos2X, pos2Y, pos2Z);

    state.camera.position.lerp(pos, 0.5);
    state.camera.updateProjectionMatrix();

    console.log(lep, blenderSection);

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
      <color args={["#050505"]} attach="background" />
      <ambientLight />
      <directionalLight position={[150, 150, 150]} intensity={0.55} />
      <CameraControls
        ref={cameraControlsRef}
        enabled={false}
        dollySpeed={0}
        truckSpeed={0}
      />
      <PerspectiveCamera makeDefault />
      <WebsitesSection
        setLep={setLep}
        zoomToView={(focusRef: React.SetStateAction<Vector3>) => (
          setZoom(!zoom), setFocus(focusRef)
        )}
      />
      <BlenderSection
        setBlenderSection={setBlenderSection}
        zoomToView={(focusRef: React.SetStateAction<Vector3>) => (
          setZoom(!zoom), setFocus(focusRef)
        )}
      />
      <Center>
        <group ref={meshRef}>
          <Bg />
          <Room />
          <group position={[-2.26, 1.63, 0.75]}>
            <Desk />
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
