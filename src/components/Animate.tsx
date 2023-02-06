import * as THREE from "three";
import type { OrbitControls as OrbitCintrolsImpl } from "three-stdlib";
import { RefObject } from "react";
import { useFrame } from "@react-three/fiber";

interface AnimateProps {
  controls: RefObject<OrbitCintrolsImpl>;
  lerping: boolean;
  to: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
}

export function Animate({ controls, lerping, to, target }: AnimateProps) {
  const toV = new THREE.Vector3();
  const targetV = new THREE.Vector3();

  toV.set(to.x, to.y, to.z);
  targetV.set(target.x, target.y, target.z);

  return useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(toV, delta * 4);
      controls.current?.target.lerp(targetV, delta * 4);
    }
  });
}
