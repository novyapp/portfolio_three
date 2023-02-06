import React, { forwardRef } from "react";
import { dummySections } from "../../data/dummySections";

interface ButtonsProps {
  gotoSection: (value: number) => void;
}

const Buttons = forwardRef<HTMLDivElement, ButtonsProps>(
  ({ gotoSection }, menuRef) => {
    return (
      <div className="absolute left-0 top-0 z-10" ref={menuRef}>
        <ul>
          {dummySections.map((a, i) => {
            return (
              <li key={i}>
                <button
                  key={i}
                  className="text-4xl text-white"
                  onClick={() => gotoSection(i)}
                >
                  {a.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default Buttons;
