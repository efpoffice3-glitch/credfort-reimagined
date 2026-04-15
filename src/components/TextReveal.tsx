import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  baseDelay?: number;
  className?: string;
  once?: boolean;
}

const TextReveal = ({ text, baseDelay = 0, className = "", once = true }: TextRevealProps) => (
  <>
    {text.split(" ").map((word, i) => (
      <motion.span
        key={`${word}-${i}`}
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        {...(once
          ? { whileInView: { opacity: 1, y: 0, filter: "blur(0px)" }, viewport: { once: true } }
          : { animate: { opacity: 1, y: 0, filter: "blur(0px)" } })}
        transition={{
          delay: baseDelay + i * 0.06,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`inline-block mr-[0.3em] ${className}`}
      >
        {word}
      </motion.span>
    ))}
  </>
);

export default TextReveal;
