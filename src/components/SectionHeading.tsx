import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

const SectionHeading = ({ badge, title, highlight, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="text-center max-w-3xl mx-auto mb-16"
  >
    {badge && (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="shimmer-badge inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4"
      >
        {badge}
      </motion.span>
    )}
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title.split(" ").map((w, i) => (
        <motion.span
          key={`t-${i}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {w}
        </motion.span>
      ))}
      {highlight && (
        <>
          {" "}
          <span className="text-gradient-gold">{highlight}</span>
        </>
      )}
    </h2>
    {description && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-4 text-muted-foreground text-lg leading-relaxed"
      >
        {description}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;
