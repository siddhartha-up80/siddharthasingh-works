import TetrisLoader from "@/components/loading/tetris-loader";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <TetrisLoader />
    </div>
  );
};

export default Loading;
