import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const GlowCard = ({ children, className = "", glowColor = "var(--gold)" }: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden rounded-2xl glass-card border border-border/50 transition-all duration-500 hover:border-primary/40 ${className}`}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Spotlight glow that follows cursor */}
      {isHovering && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(${glowColor} / 0.12), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
