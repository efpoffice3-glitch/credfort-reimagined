import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const dotY = useSpring(cursorY, { stiffness: 500, damping: 28 });
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 20 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    // Detect interactive elements
    const observer = new MutationObserver(() => updateListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    function updateListeners() {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .cursor-hover");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    }
    updateListeners();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicking ? 0.5 : hovering ? 0.6 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="w-2 h-2 rounded-full bg-foreground" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicking ? 0.8 : hovering ? 1.8 : 1,
          opacity: visible ? (hovering ? 0.6 : 0.3) : 0,
          borderColor: hovering ? "hsl(var(--gold))" : "hsl(var(--foreground) / 0.5)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        <div
          className="w-8 h-8 rounded-full border-[1.5px] transition-colors duration-200"
          style={{ borderColor: "inherit" }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
