import { useInView } from "framer-motion";
import { useRef } from "react";

export type AnimationVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "blurIn" | "slideReveal" | "rotateIn";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  slideReveal: {
    hidden: { opacity: 0, x: -100, skewX: -5 },
    visible: { opacity: 1, x: 0, skewX: 0 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotateX: 15, y: 30 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
};

export function useScrollAnimation(variant: AnimationVariant = "fadeUp", delay = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return {
    ref,
    initial: variants[variant].hidden,
    animate: isInView ? variants[variant].visible : variants[variant].hidden,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  };
}

export function getStaggerProps(variant: AnimationVariant, index: number, staggerDelay = 0.12) {
  return {
    variants: variants[variant],
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: 0.6,
      delay: index * staggerDelay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  };
}

export { variants as scrollVariants };
