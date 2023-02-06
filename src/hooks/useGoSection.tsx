import React, { useState } from "react";
import type { Vector3 } from "three";
import { dummySections } from "../data/dummySections";

export const useGoSection = () => {
  const [lerping, setLerping] = useState(false);
  const [to, setTo] = useState({ x: 0, y: 0, z: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });
  const [selected, setSelected] = useState(-1);
  const [zoom, setZoom] = useState(false);

  function gotoSection(idx: number) {
    setTo(dummySections[idx]?.position!);
    setTarget(dummySections[idx]?.lookAt!);
    setSelected(idx);
    setLerping(true);
  }

  function zoomToSee(look: Vector3) {
    if (!zoom) {
      setTo({ x: look.x, y: look.y, z: look.z + 1.2 });
      setTarget(look);
      setLerping(true);
      setZoom(!zoom);
    } else {
      gotoSection(selected);
      setZoom(!zoom);
    }
  }

  return { lerping, to, target, gotoSection, zoomToSee };
};
