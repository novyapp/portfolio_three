import { useMemo, useRef, useState } from "react";
import {
  OrthographicCamera,
  Html,
  Center,
  CameraControls,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Camera, Group } from "three";
import { useFrame, useThree } from "@react-three/fiber";

import { Room, Desk, Rack, Printer, Chair, Bg, Plant, Boo } from "./room";
import { useControls, button, buttonGroup } from "leva";
import * as THREE from "three";
const randomPos = (min = 5, max = -5) => Math.random() * (max - min) + min;

function Cloud({ momentsData, zoomToView, setLep }) {
  return (
    <group>
      <mesh
        name={name}
        scale={[1.5, 1.8, 0.15]}
        position={[9, 0.95, 0]}
        onClick={(e) => zoomToView(e.object.position)}
      >
        <Html position={[1, 1, 0]}>
          <div
            className="text-white"
            onClick={() => {
              setLep(true);
            }}
          >
            test
          </div>
          <div className="text-white" onClick={() => setLep(false)}>
            reset
          </div>
        </Html>
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Html
          scale={0.17}
          rotation={[0, 0, 0]}
          position={[0, 0.4, 0]}
          transform
        >
          <div className="annotation">
            <span style={{ fontSize: "1.5em", fontFamily: "sans-serif" }}>
              CONCEPT
            </span>
          </div>
        </Html>
      </mesh>
      <mesh
        name={name}
        scale={[1.5, 1.8, 0.15]}
        position={[10.5, 0.95, 0]}
        onClick={(e) => zoomToView(e.object.position)}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>

        <Html
          scale={0.17}
          rotation={[0, 0, 0]}
          position={[0, 0.4, 0]}
          transform
        >
          <div className="annotation">
            <span style={{ fontSize: "1.5em", fontFamily: "sans-serif" }}>
              CONCEPT
            </span>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

function MainModel() {
  const meshRef = useRef<Group>(null!);
  const cameraControlsRef = useRef<CameraControls>(null!);

  const [zoom, setZoom] = useState(false);
  const [lep, setLep] = useState(false);
  const [focus, setFocus] = useState({});
  const momentsArray = useMemo(
    () =>
      Array.from({ length: 2 }, () => ({
        position: [randomPos() + 20, 1, 5],
      })),
    []
  );

  const pos = new THREE.Vector3();
  const look = new THREE.Vector3();

  const { posX, posY, posZ, lookX, lookY, lookZ } = useControls({
    lookX: {
      value: 0,
      step: 0.1,
    },
    lookY: {
      value: 0,
      step: 0.1,
    },
    lookZ: {
      value: -20,
      step: 0.1,
    },
    posX: {
      value: 10,
      step: 0.1,
    },
    posY: {
      value: 0,
      step: 0.1,
    },
    posZ: {
      value: 6,
      step: 0.1,
    },
  });

  useFrame((state, delta) => {
    console.log("lep", lep, "zo", zoom, "fo", focus);

    zoom ? pos.set(focus.x, focus.y, focus.z + 2.2) : pos.set(10, 10, 10);
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
      <CameraControls
        ref={cameraControlsRef}
        enabled={false}
        // minZoom={70}
        // maxZoom={70}
        // minAzimuthAngle={Math.PI / 9}
        // maxAzimuthAngle={Math.PI / 3.5}
        // minPolarAngle={Math.PI / 4}
        // maxPolarAngle={Math.PI / 2.5}
      />
      <PerspectiveCamera makeDefault />
      <Cloud
        setLep={setLep}
        momentsData={momentsArray}
        zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))}
      />

      <Center>
        <Html position={[4, 2, 2]}>
          <div
            className="text-white"
            onClick={() => {
              setLep(true);
            }}
          >
            test
          </div>
          <div className="text-white" onClick={() => setLep(false)}>
            reset
          </div>
        </Html>
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

export default MainModel;
