import { useRef } from "react";
import {
  OrthographicCamera,
  Html,
  Center,
  CameraControls,
  OrbitControls,
} from "@react-three/drei";
import { Camera, Group } from "three";
import { useThree } from "@react-three/fiber";

import { Room, Desk, Rack, Printer, Chair, Bg, Plant, Boo } from "./room";
import { useControls, button, buttonGroup } from "leva";

function MainModel() {
  const cameraRef = useRef<Camera>();
  const meshRef = useRef<Group>(null!);
  const cameraControlsRef = useRef<CameraControls>(null!);

  const { camera } = useThree();

  const {
    minDistance,
    enabled,
    verticalDragToForward,
    dollyToCursor,
    infinityDolly,
  } = useControls({
    truckGrp: buttonGroup({
      label: "truck",
      opts: {
        "(1,0)": () => cameraControlsRef.current?.truck(1, 0, true),
        "(0,1)": () => cameraControlsRef.current?.truck(0, 1, true),
        "(-1,-1)": () => cameraControlsRef.current?.truck(-1, -1, true),
      },
    }),
    dollyGrp: buttonGroup({
      label: "dolly",
      opts: {
        "1": () => cameraControlsRef.current?.dolly(1, true),
        "-1": () => cameraControlsRef.current?.dolly(-1, true),
      },
    }),
    zoomGrp: buttonGroup({
      label: "zoom",
      opts: {
        "/2": () => cameraControlsRef.current?.zoom(camera.zoom / 2, true),
        "/-2": () => cameraControlsRef.current?.zoom(-camera.zoom / 2, true),
      },
    }),
    minDistance: { value: 0 },

    "fitToBox(mesh)": button(() =>
      cameraControlsRef.current?.fitToBox(meshRef.current, true)
    ),

    saveState: button(() => cameraControlsRef.current?.saveState()),
    reset: button(() => cameraControlsRef.current?.reset(true)),
    enabled: { value: true, label: "controls on" },
    verticalDragToForward: {
      value: false,
      label: "vert. drag to move forward",
    },
    dollyToCursor: { value: false, label: "dolly to cursor" },
    infinityDolly: { value: false, label: "infinity dolly" },
  });

  console.log(cameraControlsRef.current);

  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[10, 10, 10]}
        near={-200}
        zoom={70}
        ref={cameraRef}
      />
      <CameraControls
        ref={cameraControlsRef}
        minDistance={minDistance}
        enabled={enabled}
        maxDistance={Infinity}
        verticalDragToForward={verticalDragToForward}
        dollyToCursor={dollyToCursor}
        infinityDolly={infinityDolly}
        minZoom={70}
        maxZoom={70}
        minAzimuthAngle={Math.PI / 9}
        maxAzimuthAngle={Math.PI / 3.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.5}
      />

      <Center>
        <Html>
          <div
            className="text-white"
            onClick={() => {
              cameraControlsRef.current?.setLookAt(0, 0, 0, -2, -1, -2, true);
            }}
          >
            test
          </div>
          <div
            className="text-white"
            onClick={() => {
              cameraControlsRef.current?.setLookAt(1, 4, 4, -3, -5, -8, true);
            }}
          >
            test2
          </div>
          <div
            className="text-white"
            onClick={() => cameraControlsRef.current?.reset(true)}
          >
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
