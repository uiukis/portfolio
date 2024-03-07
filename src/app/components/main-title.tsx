"use client";

import React, { PropsWithChildren } from "react";

const MainTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="flex flex-col z-10 gap-4 text-3xl text-transparent uppercase font-medium duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        {children}
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </>
  );
};

export default MainTitle;
