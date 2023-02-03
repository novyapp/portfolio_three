import React from "react";

const Header = () => {
  return (
    <div className="absolute left-10 top-10 z-10">
      <div className="absolute left-0 ">
        <h1 className="bg-gradient-to-r from-orange-400 via-pink-500  to-pink-700 bg-clip-text text-7xl font-extrabold  uppercase text-transparent">
          Michal Nowotnik
        </h1>
        <h2 className="pl-3 text-lg uppercase text-white">
          Front-End Developer
        </h2>
      </div>
    </div>
  );
};

export default Header;
