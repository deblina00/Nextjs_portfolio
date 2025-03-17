"use client"; // Ensure it's a client-side component

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCursor = () => {
  //   const cursorSize = 20;
  //   const enlargedSize = 40;

  const dotSize = 8; // Small solid center dot
  const ringSize = 30; // Outer ring size
  const enlargedRingSize = 50; // Hover effect size

  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth cursor movement
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
    //   mouseX.set(e.clientX - cursorSize / 2);
    //   mouseY.set(e.clientY - cursorSize / 2);

    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    };

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    // Add hover effect to links and buttons
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [mouseX, mouseY]);

  return (
    // <motion.div
    //   className="fixed top-0 left-0 bg-white rounded-full pointer-events-none mix-blend-difference z-50"
    //   style={{
    //     width: isHovered ? enlargedSize : cursorSize,
    //     height: isHovered ? enlargedSize : cursorSize,
    //     translateX: smoothX,
    //     translateY: smoothY,
    //     transition: "width 0.2s, height 0.2s",
    //   }}
    // />

    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 border-2 border-white rounded-full pointer-events-none z-50"
        style={{
          width: isHovered ? enlargedRingSize : ringSize,
          height: isHovered ? enlargedRingSize : ringSize,
          translateX: smoothX,
          translateY: smoothY,
          transition: "width 0.2s, height 0.2s",
          marginLeft: -(isHovered ? enlargedRingSize / 2 : ringSize / 2),
          marginTop: -(isHovered ? enlargedRingSize / 2 : ringSize / 2),
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-50"
        style={{
          width: dotSize,
          height: dotSize,
          translateX: smoothX,
          translateY: smoothY,
          marginLeft: -dotSize / 2,
          marginTop: -dotSize / 2,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
