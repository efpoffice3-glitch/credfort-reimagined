import { motion } from "framer-motion";
import { MessageCircle, Phone, FileCheck, Zap, Banknote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  { num: "01", icon: Phone, title: "Entre em Contato", desc: "Fale conosco pelo WhatsApp ou preencha o simulador. É rápido e sem compromisso.", time: "30 segundos" },
  { num: "02", icon: FileCheck, title: "Análise Personalizada", desc: "Nossos consultores analisam seu perfil e encontram as melhores condições para você.", time: "Sem burocracia" },
  { num: "03", icon: Zap, title: "Aprovação Rápida", desc: "Com análise inteligente, seu crédito é aprovado em minutos, de forma 100% digital.", time: "Em minutos" },
  { num: "04", icon: Banknote, title: "Dinheiro na Conta", desc: "Após a assinatura digital do contrato, o dinheiro cai na sua conta em até 24 horas.", time: "Em até 24h" },
];

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Quero%20iniciar%20minha%20simulação!";

const HowItWorks = () => (
  <section className="section-padding bg-background relative">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading badge="Processo Simples" title="Como" highlight="Funciona?" description="Do primeiro contato ao dinheiro na conta em 4 passos simples. Sem burocracia, sem complicação." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative glass-card-hover rounded-2xl p-6 group"
          >
            <span className="font-heading text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">{step.num}</span>
            <div className="mt-2 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mt-4 font-heading font-semibold text-lg text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            <span className="mt-3 inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{step.time}</span>

            {i < 3 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-0.5 bg-primary/20" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-gold font-heading font-bold text-primary-foreground hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          Iniciar Simulação
        </a>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
