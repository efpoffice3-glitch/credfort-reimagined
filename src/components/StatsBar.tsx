import { motion } from "framer-motion";

const stats = [
  { value: "R$ 500M+", label: "Crédito Liberado" },
  { value: "12.000+", label: "Clientes Atendidos" },
  { value: "1.29%", label: "Taxa a partir de" },
  { value: "24h", label: "Dinheiro na Conta" },
];

const StatsBar = () => (
  <div className="py-10 border-y border-border bg-card/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-heading text-2xl md:text-3xl font-bold text-gradient-gold">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default StatsBar;
