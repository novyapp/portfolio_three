import React, { forwardRef } from "react";
import { FiGithub } from "react-icons/fi";

const SocialLinks = forwardRef<HTMLDivElement>((_, socialRef) => {
  return (
    <div
      ref={socialRef}
      className="text-md absolute bottom-10 left-10 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
    >
      <FiGithub />
    </div>
  );
});

export default SocialLinks;
