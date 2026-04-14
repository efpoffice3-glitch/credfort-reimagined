import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    text: "Precisava de capital de giro urgente e a CredFort resolveu em menos de 24 horas. Taxa muito melhor que o banco tradicional. Recomendo demais!",
    name: "Carlos Eduardo",
    role: "Empresário • São Paulo, SP",
  },
  {
    text: "Achei que seria difícil conseguir crédito como autônoma, mas o atendimento foi excepcional. Tudo pelo WhatsApp, sem burocracia nenhuma.",
    name: "Maria Fernanda",
    role: "Autônoma • Curitiba, PR",
  },
  {
    text: "Já fiz 3 operações com a CredFort. Sempre com as melhores condições e um atendimento nota 10. Viraram meu parceiro de negócios.",
    name: "Roberto Almeida",
    role: "Comerciante • Rio de Janeiro, RJ",
  },
  {
    text: "Financiei equipamentos para minha clínica com taxas muito competitivas. O processo todo foi super rápido e transparente.",
    name: "Ana Paula",
    role: "Dentista • Belo Horizonte, MG",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card/50">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading
        title="O que nossos clientes"
        highlight="dizem"
        description="Mais de 12.000 brasileiros já transformaram suas finanças com a CredFort"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover rounded-2xl p-8 relative"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, si) => (
                <Star key={si} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center font-heading font-bold text-primary-foreground text-sm">
                {t.name[0]}
              </div>
              <div>
                <div className="font-heading font-semibold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
