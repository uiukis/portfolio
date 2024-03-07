import React, { PropsWithChildren } from "react";

const BottomBar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-16 p-16 animate-fade-in duration-500 fixed bottom-0 left-0 right-0 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default BottomBar;
