import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

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
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center group"
    >
      <div className="font-heading text-2xl md:text-3xl font-bold text-gradient-gold transition-transform duration-300 group-hover:scale-110">
        {stat.prefix}
        {stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.round(count).toLocaleString("pt-BR")}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
      <motion.div
        className="mx-auto mt-2 h-0.5 rounded-full bg-primary/30"
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
};

const StatsBar = () => (
  <div className="py-10 border-y border-border bg-card/50 relative overflow-hidden">
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
