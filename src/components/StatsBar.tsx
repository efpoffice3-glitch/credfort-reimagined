import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import ParticleField from "./ParticleField";

const stats = [
  { value: 500, prefix: "R$ ", suffix: "M+", label: "Crédito Liberado", decimals: 0 },
  { value: 12000, prefix: "", suffix: "+", label: "Clientes Atendidos", decimals: 0 },
  { value: 1.29, prefix: "", suffix: "%", label: "Taxa a partir de", decimals: 2 },
  { value: 24, prefix: "", suffix: "h", label: "Dinheiro na Conta", decimals: 0 },
];

const StatItem = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, ref } = useCountUp(stat.value, 2000, stat.decimals);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center group relative"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/[0.04] transition-all duration-500 -m-4 p-4" />
      
      <motion.div
        className="relative font-heading text-3xl md:text-4xl font-bold text-gradient-gold"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {stat.prefix}
        {stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.round(count).toLocaleString("pt-BR")}
        {stat.suffix}
      </motion.div>
      <div className="relative text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
      <motion.div
        className="relative mx-auto mt-3 h-0.5 rounded-full overflow-hidden bg-border/30"
        style={{ width: 48 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </motion.div>
  );
};

const StatsBar = () => (
  <div className="py-14 border-y border-border bg-card/50 relative overflow-hidden">
    <ParticleField count={15} color="var(--gold)" />
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
    }} />
    <div className="container mx-auto px-4 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <StatItem key={s.label} stat={s} index={i} />
        ))}
      </div>
    </div>
  </div>
);

export default StatsBar;
