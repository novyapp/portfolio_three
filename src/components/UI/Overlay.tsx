import React, { createRef, RefObject, useEffect, useRef } from "react";
import Buttons from "./Buttons";
import Header from "./Header";
import SocialLinks from "./SocialLinks";
import { gsap } from "gsap";

interface OverlayProps {
  gotoSection: (value: number) => void;
  canvasAnim: RefObject<HTMLCanvasElement>;
}

function Overlay({ gotoSection, canvasAnim }: OverlayProps) {
  console.log(canvasAnim);
  const headerRef = createRef<HTMLDivElement>();
  const socialRef = createRef<HTMLDivElement>();
  const menuRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(canvasAnim.current, { y: "0%" }, { y: "0%" }).duration(1);
    tl.fromTo(headerRef.current, { y: "-140%" }, { y: "0%" }).duration(1.5);
    tl.fromTo(socialRef.current, { y: "180%" }, { y: "0%" }).duration(1.8);
    tl.fromTo(menuRef.current, { x: "-180%" }, { x: "0%" }).duration(2);
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <Buttons gotoSection={gotoSection} ref={menuRef} />
      <SocialLinks ref={socialRef} />
    </>
  );
}

export default Overlay;
