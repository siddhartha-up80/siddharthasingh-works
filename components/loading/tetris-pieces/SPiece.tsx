import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

const SPiece = forwardRef(({ className }: any, ref: any) => {
  return (
    <div ref={ref} className={`sPiece ${className}`}>
      <div />
      <div />
    </div>
  );
});

export default motion(SPiece);
