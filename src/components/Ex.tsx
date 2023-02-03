import { type NextPage } from "next";
import { useState, Suspense, useRef, useEffect } from "react";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";

import Header from "../components/Header";
import Experience from "../components/Experience";

const Ex = () => {
  const [lep, setLep] = useState<boolean>(false);
  const [blen, setBlen] = useState<boolean>(false);

  return (
    <Canvas flat className="z-0">
      <color args={["#050505"]} attach="background" />
      <ambientLight />
      <directionalLight position={[150, 150, 150]} intensity={0.55} />
      <Experience setLep={setLep} lep={lep} blen={blen} setBlen={setBlen} />
    </Canvas>
  );
};

export default Ex;
