import { motion } from "framer-motion";
import { Zap, TrendingDown, ShieldCheck, Smartphone, CalendarClock, Headphones } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { getStaggerProps } from "@/hooks/useScrollAnimation";

const benefits = [
  { icon: Zap, title: "Aprovação em Minutos", desc: "Esqueça semanas de espera. Analisamos seu perfil e liberamos o crédito em tempo recorde." },
  { icon: TrendingDown, title: "Menores Taxas do Mercado", desc: "Nosso algoritmo encontra as melhores taxas para o seu perfil. A partir de 1.29% ao mês." },
  { icon: ShieldCheck, title: "100% Seguro", desc: "Contratação digital com segurança bancária de ponta. Sem filas, sem papelada, sem surpresas." },
  { icon: Smartphone, title: "Totalmente Digital", desc: "Faça tudo pelo celular ou computador. Sem precisar ir a agências ou enfrentar burocracias." },
  { icon: CalendarClock, title: "Flexibilidade de Pagamento", desc: "Escolha o prazo ideal para você. De 12 a 120 meses com parcelas que cabem no bolso." },
  { icon: Headphones, title: "Suporte Humanizado", desc: "Nossa equipe está no WhatsApp para tirar todas as suas dúvidas em tempo real." },
];

const WhyChoose = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 40px, hsl(var(--gold)) 40px, hsl(var(--gold)) 41px)",
    }} />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading
        title="Por que escolher a"
        highlight="CredFort?"
        description="Eliminamos as barreiras entre você e o capital necessário para realizar seus projetos."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            {...getStaggerProps("blurIn", i, 0.1)}
            className="glass-card rounded-2xl p-8 group relative overflow-hidden border border-border/50 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_hsl(var(--gold)/0.15)]"
          >
            {/* Glow overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/[0.03] group-hover:to-primary/[0.06] transition-all duration-700" />

            {/* Bottom border fill */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-primary/40 group-hover:w-full transition-all duration-700 ease-out" />

            <motion.div
              className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300"
              whileInView={{ scale: [0.5, 1.15, 1], rotate: [0, -5, 0] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6, type: "spring" }}
            >
              <b.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <h3 className="relative font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{b.title}</h3>
            <p className="relative text-sm text-muted-foreground leading-relaxed">{b.desc}</p>

            {/* Arrow indicator on hover */}
            <motion.div
              className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
