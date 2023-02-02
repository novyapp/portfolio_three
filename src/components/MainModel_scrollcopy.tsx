import { useRef } from "react";
import {
  useGLTF,
  useTexture,
  OrthographicCamera,
  useScroll,
  Circle,
  GradientTexture,
} from "@react-three/drei";
import { Camera, Group, Mesh } from "three";
import { useFrame } from "@react-three/fiber";

import { Room, Desk, Rack, Printer, Chair } from "./room";

function MainModel() {
  const cameraRef = useRef<Camera>();
  const roomRef = useRef<Group>(null!);
  const circleRef = useRef<Mesh>(null!);
  const circle2Ref = useRef<Mesh>(null!);
  const data = useScroll();

  useFrame((state, delta) => {
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    const firstSection = data.range(0, 1 / 10);
    const secondSection = data.range(3 / 10, 4 / 10);
    const thirdSection = data.range(6 / 10, 7 / 10);

    console.log(
      "a",
      firstSection,
      "off",
      data.offset,
      "scale",
      roomRef.current.scale.x,
      "position",
      secondSection,
      "x",
      roomRef.current.position.x,
      "y",
      roomRef.current.position.y,
      "cam",
      cameraRef.current
    );

    roomRef.current.position.x = 4 + firstSection * 5 + -secondSection * 10;
    roomRef.current.position.y =
      -3 + (firstSection * 5) / 2 + -secondSection * 10;

    roomRef.current.rotation.y = -mouseX / 40;

    roomRef.current.scale.x = secondSection + 1;
    roomRef.current.scale.y = secondSection + 1;
    roomRef.current.scale.z = secondSection + 1;

    circleRef.current.scale.x = firstSection * 50;
    circleRef.current.scale.y = firstSection * 50;
    circleRef.current.scale.z = firstSection * 50;

    circle2Ref.current.scale.x = secondSection * 50;
    circle2Ref.current.scale.y = secondSection * 50;
    circle2Ref.current.scale.z = secondSection * 50;
  });

  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[10, 10, 10]}
        zoom={70}
        ref={cameraRef}
      />
      <group ref={roomRef}>
        {/* <Circle
          rotation={[-1.6, 0, 0]}
          position={[-2, -1, -2.5]}
          ref={circleRef}
          material-color="#1a7ed2"
        /> */}

        <Circle
          args={[1, 60, 60]}
          rotation={[-1.6, 0, 0]}
          position={[-2, -1, -2.5]}
          ref={circleRef}
          material-color="#9f7a6b"
        />

        <Circle
          args={[1, 60, 60]}
          rotation={[-1.6, 0, 0]}
          position={[-2, -0.99, -2.5]}
          ref={circle2Ref}
          material-color="#dc765d"
        />
        <Room />
        <group position={[-5.1, 1.65, -2.2]}>
          <Desk />
          <Printer />
        </group>
        <Rack />
        <Chair />
      </group>
    </>
  );
}

export default MainModel;
