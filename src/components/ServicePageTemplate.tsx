import { ReactNode } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, CheckCircle, Star, Phone, FileCheck, Zap, Banknote, Lock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import SectionHeading from "./SectionHeading";
import StatsBar from "./StatsBar";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20CredFort.";

interface ServiceBenefit {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  stats: { value: string; label: string }[];
  benefits: ServiceBenefit[];
}

const ServicePageTemplate = ({ badge, title, titleHighlight, description, ctaText, stats, benefits }: ServicePageProps) => (
  <>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <CountdownTimer />
          </motion.div>

          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="inline-block mt-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
            {badge}
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            {title} <span className="text-gradient-gold">{titleHighlight}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {description}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              { icon: ShieldCheck, text: "100% Seguro" },
              { icon: Clock, text: "Dinheiro em 24h" },
              { icon: CheckCircle, text: "Sem burocracia" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" /> {text}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-gold font-heading font-bold text-primary-foreground hover:scale-105 transition-transform animate-pulse-gold">
              <MessageCircle className="w-5 h-5" />
              {ctaText}
            </a>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <div className="py-10 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-gradient-gold">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* How it works */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Processo Simples" title="Como" highlight="Funciona?" description="Do primeiro contato ao dinheiro na conta em 4 passos simples" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "01", icon: Phone, title: "Entre em Contato", desc: "Fale conosco pelo WhatsApp", time: "30 segundos" },
            { num: "02", icon: FileCheck, title: "Análise Personalizada", desc: "Avaliamos seu perfil", time: "Sem burocracia" },
            { num: "03", icon: Zap, title: "Aprovação Rápida", desc: "Crédito aprovado rapidamente", time: "Em minutos" },
            { num: "04", icon: Banknote, title: "Dinheiro na Conta", desc: "Valor liberado na sua conta", time: "Em até 24h" },
          ].map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass-card-hover rounded-2xl p-6 group">
              <span className="font-heading text-5xl font-bold text-primary/10">{step.num}</span>
              <div className="mt-2 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-lg text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              <span className="mt-3 inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{step.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Vantagens Exclusivas" title="Por que escolher nosso" highlight={badge + "?"} description="Oferecemos as melhores condições do mercado com atendimento humanizado e taxas justas" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card-hover rounded-2xl p-8 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                {b.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <TestimonialsSection />
    <FAQSection />
    <FinalCTA />
  </>
);

export default ServicePageTemplate;
