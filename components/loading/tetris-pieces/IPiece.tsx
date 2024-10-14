import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

const IPiece = forwardRef(({ className } : any, ref : any) => {
  return (
    <div ref={ref} className={`iPiece ${className}`}>
      <div />
    </div>
  );
});

export default motion(IPiece);
