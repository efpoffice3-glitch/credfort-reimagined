import { motion } from "framer-motion";
import { Zap, TrendingDown, ShieldCheck, Smartphone, CalendarClock, Headphones } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { getStaggerProps } from "@/hooks/useScrollAnimation";

const benefits = [
  { icon: Zap, title: "Aprovação em Minutos", desc: "Esqueça semanas de espera. Analisamos seu perfil em minutos e o dinheiro cai na conta em menos de 24h." },
  { icon: TrendingDown, title: "Menores Taxas do Mercado", desc: "Algoritmo de risco que entende sua realidade financeira, oferecendo juros que cabem no seu fluxo de caixa." },
  { icon: ShieldCheck, title: "100% Seguro", desc: "Contratação feita pelo celular com segurança bancária de ponta a ponta. Sem filas, sem papelada." },
  { icon: Smartphone, title: "Totalmente Digital", desc: "Faça tudo pelo celular ou computador. Sem precisar ir a agências ou enfrentar burocracias." },
  { icon: CalendarClock, title: "Flexibilidade de Pagamento", desc: "Escolha o prazo que melhor se adapta à sua realidade. De 12 a 120 meses para pagar." },
  { icon: Headphones, title: "Suporte Humanizado", desc: "Nossa equipe está disponível via WhatsApp para tirar todas as suas dúvidas em tempo real." },
];

const WhyChoose = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    {/* Diagonal lines bg */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 40px, hsl(var(--gold)) 40px, hsl(var(--gold)) 41px)",
    }} />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        title="Por que escolher a"
        highlight="CredFort?"
        description="Eliminamos as barreiras entre você e o capital necessário para realizar seus projetos ou expandir seus negócios."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            {...getStaggerProps("blurIn", i, 0.1)}
            className="glass-card-hover rounded-2xl p-8 group relative overflow-hidden"
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            {/* Bottom border fill on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-700" />

            <motion.div
              className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300"
              whileInView={{ scale: [0.5, 1.15, 1], rotate: [0, -5, 0] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6, type: "spring" }}
            >
              <b.icon className="w-7 h-7 text-primary" />
            </motion.div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
