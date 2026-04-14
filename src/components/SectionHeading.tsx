import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

const SectionHeading = ({ badge, title, highlight, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center max-w-3xl mx-auto mb-16"
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
        {badge}
      </span>
    )}
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}{" "}
      {highlight && <span className="text-gradient-gold">{highlight}</span>}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
