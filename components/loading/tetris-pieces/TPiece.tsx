import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

const TPiece = forwardRef(({ className }: any, ref: any) => {
  return (
    <div ref={ref} className={`tPiece ${className}`}>
      <div />
      <div />
    </div>
  );
});

export default motion(TPiece);
