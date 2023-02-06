import { type NextPage } from "next";
import type { OrbitControls as OrbitCintrolsImpl } from "three-stdlib";
import Head from "next/head";
import { Suspense, useRef } from "react";

import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useGoSection } from "../hooks/useGoSection";
import {
  Bg,
  Boo,
  Chair,
  Desk,
  Plant,
  Printer,
  Rack,
  Room,
} from "../components/room";
import Overlay from "../components/UI/Overlay";
import WebsitesSection from "../components/sections/WebsitesSection";
import BlenderSection from "../components/sections/BlenderSection";
import { Animate } from "../components/Animate";

const Home: NextPage = () => {
  const { lerping, to, target, gotoSection, zoomToSee } = useGoSection();

  const controlRef = useRef<OrbitCintrolsImpl>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  return (
    <>
      <Head>
        <title>NovyAPP</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full bg-black text-white">
        <Suspense fallback={null}>
          <Canvas
            flat
            className="z-0"
            camera={{ position: [5, 7, 5] }}
            ref={canvasRef}
          >
            <color args={["#050505"]} attach="background" />
            <ambientLight />
            <directionalLight position={[150, 150, 150]} intensity={0.55} />
            <OrbitControls ref={controlRef} target={[0, 0, 0]} />
            <group>
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
            <WebsitesSection zoomToSee={zoomToSee} gotoSection={gotoSection} />
            <BlenderSection zoomToSee={zoomToSee} gotoSection={gotoSection} />
            <Animate
              controls={controlRef}
              lerping={lerping}
              to={to}
              target={target}
            />
          </Canvas>
        </Suspense>
        <Loader />
        <Overlay gotoSection={gotoSection} canvasAnim={canvasRef} />
      </main>
    </>
  );
};

export default Home;
