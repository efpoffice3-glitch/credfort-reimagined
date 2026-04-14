import { motion } from "framer-motion";
import { Zap, TrendingDown, ShieldCheck, Smartphone, CalendarClock, Headphones } from "lucide-react";
import SectionHeading from "./SectionHeading";

const benefits = [
  { icon: Zap, title: "Aprovação em Minutos", desc: "Esqueça semanas de espera. Analisamos seu perfil em minutos e o dinheiro cai na conta em menos de 24h." },
  { icon: TrendingDown, title: "Menores Taxas do Mercado", desc: "Algoritmo de risco que entende sua realidade financeira, oferecendo juros que cabem no seu fluxo de caixa." },
  { icon: ShieldCheck, title: "100% Seguro", desc: "Contratação feita pelo celular com segurança bancária de ponta a ponta. Sem filas, sem papelada." },
  { icon: Smartphone, title: "Totalmente Digital", desc: "Faça tudo pelo celular ou computador. Sem precisar ir a agências ou enfrentar burocracias." },
  { icon: CalendarClock, title: "Flexibilidade de Pagamento", desc: "Escolha o prazo que melhor se adapta à sua realidade. De 12 a 120 meses para pagar." },
  { icon: Headphones, title: "Suporte Humanizado", desc: "Nossa equipe está disponível via WhatsApp para tirar todas as suas dúvidas em tempo real." },
];

const WhyChoose = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading
        title="Por que escolher a"
        highlight="CredFort?"
        description="Eliminamos as barreiras entre você e o capital necessário para realizar seus projetos ou expandir seus negócios."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover rounded-2xl p-8 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
