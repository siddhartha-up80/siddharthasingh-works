// CustomCursor.js
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Pen, PenTool } from "lucide-react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false); // State to track when default pointer is shown

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsPointer(true); // Show default pointer
    const handleMouseLeave = () => setIsPointer(false); // Show custom cursor

    // Track movement
    window.addEventListener("mousemove", handleMouseMove);

    // Track pointer visibility (on buttons, links, etc.)
    const pointerElements = document.querySelectorAll(
      "button, a, input, textarea"
    );
    pointerElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      pointerElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    // !isPointer && ( // Only show custom cursor when isPointer is false
    //   <motion.div
    //     className="custom-cursor"
    //     style={{
    //       position: "fixed",
    //       top: 0,
    //       left: 0,
    //       zIndex: 9999,
    //       pointerEvents: "none", // Ignore events so the custom cursor doesn't block clicks
    //       transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
    //     }}
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.1 }}
    //   >
    //     <div
    //       style={{
    //         // transform: "rotate(90deg)", // Rotating to match Windows cursor
    //         width: "24px",
    //         height: "24px",
    //       }}
    //     >
    //       <PenTool size={26} className="text-red-800 dark:text-red-300" />
    //     </div>
    //   </motion.div>
    // )
    <motion.div
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none", // Ignore events so the custom cursor doesn't block clicks
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <div
        style={{
          // transform: "rotate(90deg)", // Rotating to match Windows cursor
          width: "24px",
          height: "24px",
        }}
      >
        <PenTool size={26} className="text-red-800 dark:text-red-300" />
      </div>
    </motion.div>
  );
};

export default CustomCursor;
