import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

const OPiece = forwardRef(({ className }: any, ref: any) => {
  return (
    <div ref={ref} className={`oPiece ${className}`}>
      <div />
    </div>
  );
});

export default motion(OPiece);
