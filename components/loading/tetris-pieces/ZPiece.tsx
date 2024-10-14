import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

const ZPiece = forwardRef(({ className }: any, ref: any) => {
  return (
    <div ref={ref} className={`zPiece ${className}`}>
      <div />
      <div />
    </div>
  );
});

export default motion(ZPiece);
