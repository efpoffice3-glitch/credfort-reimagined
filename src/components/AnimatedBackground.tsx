import { useCallback, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface Props {
  variant?: "orbs" | "grid" | "mesh" | "radial" | "diagonal";
  accentColor?: string;
}

const AnimatedBackground = ({ variant = "orbs", accentColor }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [mouseX, mouseY]);

  const orb1X = useTransform(mouseX, [0, 1], ["-10%", "10%"]);
  const orb1Y = useTransform(mouseY, [0, 1], ["-10%", "10%"]);
  const orb2X = useTransform(mouseX, [0, 1], ["10%", "-10%"]);
  const orb2Y = useTransform(mouseY, [0, 1], ["5%", "-15%"]);

  const accent = accentColor || "var(--gold)";

  if (variant === "grid") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, hsl(${accent}) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    );
  }

  if (variant === "mesh") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 animate-mesh-gradient opacity-20" style={{
          background: `
            radial-gradient(ellipse at 20% 50%, hsl(${accent} / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, hsl(220 60% 50% / 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, hsl(${accent} / 0.2) 0%, transparent 50%)
          `,
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    );
  }

  if (variant === "radial") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-pulse-slow opacity-15 rounded-full" style={{
          background: `radial-gradient(circle, hsl(${accent} / 0.4) 0%, transparent 70%)`,
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    );
  }

  if (variant === "diagonal") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent, transparent 40px,
            hsl(${accent}) 40px, hsl(${accent}) 41px
          )`,
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    );
  }

  // orbs (default)
  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="absolute inset-0 overflow-hidden pointer-events-none" style={{ pointerEvents: "auto" as const }}>
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] will-change-transform"
        style={{
          x: orb1X, y: orb1Y,
          background: `radial-gradient(circle, hsl(${accent}), transparent 70%)`,
          top: "10%", left: "15%",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.07] blur-[80px] will-change-transform"
        style={{
          x: orb2X, y: orb2Y,
          background: `radial-gradient(circle, hsl(220 60% 50%), transparent 70%)`,
          bottom: "10%", right: "15%",
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.05] blur-[60px] animate-float"
        style={{
          background: `radial-gradient(circle, hsl(${accent}), transparent 70%)`,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
    </div>
  );
};

export default AnimatedBackground;
