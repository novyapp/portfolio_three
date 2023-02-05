import React, { forwardRef } from "react";

interface DeskProps {
  setLep: (value: boolean) => void;
  setBlenderSection: (value: boolean) => void;
}

const Menu = forwardRef<HTMLDivElement, DeskProps>(
  ({ setLep, setBlenderSection }, menuRef) => {
    return (
      <div
        ref={menuRef}
        className="absolute left-10 top-[50%] flex-col space-y-4 rounded-md p-2 text-zinc-300"
      >
        <div
          className="rounded-md bg-zinc-800 p-2  hover:bg-zinc-700"
          onClick={() => {
            setLep(true);
          }}
        >
          Websites
        </div>
        <div
          className="rounded-md bg-zinc-800 p-2  hover:bg-zinc-700"
          onClick={() => {
            setBlenderSection(true);
          }}
        >
          3D
        </div>
      </div>
    );
  }
);

export default Menu;
