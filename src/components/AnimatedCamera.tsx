import React, { useRef } from "react";

import { useFrame, useThree } from "@react-three/fiber";

const AnimatedCamera = ({ target }) => {
  const { camera } = useThree();

  console.log(target);

  useFrame((state) => {
    if (target) {
      camera.position.set(
        target.position.x,
        target.position.y,
        target.position.z + 10
      );
      camera.lookAt(target.position);
    }
  });

  return null;
};

export default AnimatedCamera;
