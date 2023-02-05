import React, { forwardRef } from "react";

const Overlay = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="absolute left-10 top-10" ref={ref}>
      <h1 className="bg-gradient-to-r from-orange-400 via-pink-500  to-pink-700 bg-clip-text text-4xl font-extrabold  uppercase text-transparent">
        Michal
        <br /> Nowotnik
      </h1>
      <h2 className="text-md uppercase text-white">Front-End Developer</h2>
    </div>
  );
});

export default Overlay;
