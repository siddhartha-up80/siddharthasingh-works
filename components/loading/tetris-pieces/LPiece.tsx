import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

const LPiece = forwardRef(({ className }: any, ref: any) => {
  return (
    <div ref={ref} className={`lPiece ${className}`}>
      <div />
      <div />
    </div>
  );
});

export default motion(LPiece);
