import React from "react";

const MainContent = () => {
  return (
    <div className="flex w-screen">
      {/* Section 1 */}
      <div className="absolute left-20 top-[40vh] w-1/2">
        <h1 className="bg-gradient-to-r from-orange-400 via-pink-500  to-pink-700 bg-clip-text text-7xl font-extrabold  uppercase text-transparent">
          Michal Nowotnik
        </h1>
        <h2 className="pl-3 text-lg uppercase text-white">
          Front-End Developer | 3D Designer
        </h2>
      </div>
      {/* Section 2 */}
      <div className="absolute top-[150vh] min-h-[100vh] w-[50vw] rounded-tr-3xl bg-zinc-900">
        <h1 className="absolute left-0 top-[-50px] w-screen text-9xl font-extrabold uppercase text-white">
          {"<portfolio>"}
        </h1>
        <h1 className="absolute left-0 bottom-[-100px]  w-screen text-9xl font-extrabold uppercase text-white">
          {"</portfolio>"}
        </h1>
      </div>

      {/* Section 3 */}
      <div className="absolute top-[400vh] right-0 min-h-[500vh] w-[50vw] rounded-tr-3xl bg-zinc-900">
        <h1 className="absolute left-0 top-[-50px] w-screen text-9xl font-extrabold uppercase text-white">
          {"<portfolio>"}
        </h1>
        <h1 className="absolute left-0 bottom-[-100px]  w-screen text-9xl font-extrabold uppercase text-white">
          {"</portfolio>"}
        </h1>
      </div>
    </div>
  );
};

export default MainContent;
