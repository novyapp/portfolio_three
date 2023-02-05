import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { type NextPage } from "next";
import Head from "next/head";
import { createRef, Suspense, useEffect, useRef, useState } from "react";
import Experience from "../components/Experience";
import Overlay from "../components/Overlay";
import { gsap } from "gsap";
import SocialLinks from "../components/SocialLinks";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  const [lep, setLep] = useState<boolean>(false);
  const [blenderSection, setBlenderSection] = useState<boolean>(false);

  const ref = createRef<HTMLDivElement>();
  const socialRef = createRef<HTMLDivElement>();
  const menuRef = createRef<HTMLDivElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.3 } });
    tl.fromTo(canvasRef.current, { y: "0%" }, { y: "0%" });
    tl.fromTo(ref.current, { y: "-140%" }, { y: "0%" });
    tl.fromTo(socialRef.current, { y: "180%" }, { y: "0%" });
  }, []);

  return (
    <>
      <Head>
        <title>NovyAPP</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full bg-black text-white">
        <Suspense fallback={null}>
          <Canvas flat className="z-0" ref={canvasRef}>
            <Experience
              setLep={setLep}
              lep={lep}
              blenderSection={blenderSection}
              setBlenderSection={setBlenderSection}
            />
          </Canvas>
        </Suspense>
        <Loader />
        {!lep ? (
          <>
            <Overlay ref={ref} />
            <SocialLinks ref={socialRef} />
            <Menu
              ref={menuRef}
              setLep={setLep}
              setBlenderSection={setBlenderSection}
            />
          </>
        ) : null}
      </main>
    </>
  );
};

export default Home;
