import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

const JPiece = forwardRef(({ className }: any, ref: any) => {
  return (
    <div ref={ref} className={`jPiece ${className}`}>
      <div />
      <div />
    </div>
  );
});

export default motion(JPiece);
