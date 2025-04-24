"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initialize window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Mouse move handler with throttling
    let lastUpdateTime = 0;
    const updateMousePosition = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdateTime < 30) return; // ~30ms throttle

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      lastUpdateTime = now;
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  const gradientSize = windowSize.width < 768 ? 200 : 300;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Animated Background Gradients - Responsive sizes */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] md:top-[-20%] md:left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-[-10%] right-[-5%] md:bottom-[-20%] md:right-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[20%] md:right-[30%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Mouse-responsive gradient - More efficient implementation */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-primary/30 to-blue-400/30 dark:from-primary/20 dark:to-blue-500/20 blur-[50px] md:blur-[80px]"
        style={{
          width: gradientSize,
          height: gradientSize,
          x: mouseX,
          y: mouseY,
          translateX: `-50%`,
          translateY: `-50%`,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
          mass: 0.5,
        }}
      />

      {/* Background noise texture */}
      <div className="absolute inset-0 bg-noise opacity-20 dark:opacity-30" />
    </div>
  );
}
