import { motion } from "framer-motion";
import { Zap, TrendingDown, ShieldCheck, Smartphone, CalendarClock, Headphones } from "lucide-react";
import SectionHeading from "./SectionHeading";
import GlowCard from "./GlowCard";
import AnimatedBackground from "./AnimatedBackground";

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
    <AnimatedBackground variant="diagonal" />

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
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlowCard className="p-8 h-full group">
              {/* Bottom border fill */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-primary/40 group-hover:w-full transition-all duration-700 ease-out z-20" />

              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300"
                whileInView={{ scale: [0.5, 1.15, 1], rotate: [0, -5, 0] }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.2, duration: 0.6, type: "spring" }}
              >
                <b.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>

              {/* Arrow indicator on hover */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                  <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
