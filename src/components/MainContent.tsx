import { Html } from "@react-three/drei";
import React from "react";

const MainContent = () => {
  return (
    <Html>
      <div className="flex w-screen">
        {/* Section 1 */}
        <div className="absolute left-0 w-1/2">
          <h1 className="bg-gradient-to-r from-orange-400 via-pink-500  to-pink-700 bg-clip-text text-7xl font-extrabold  uppercase text-transparent">
            Michal Nowotnik
          </h1>
          <h2 className="pl-3 text-lg uppercase text-white">
            Front-End Developer | 3D Designer
          </h2>
        </div>
      </div>
    </Html>
  );
};

export default MainContent;
