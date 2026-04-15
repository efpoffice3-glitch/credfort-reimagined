import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, FileCheck, Zap, Banknote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import GlowCard from "./GlowCard";
import AnimatedBackground from "./AnimatedBackground";

const steps = [
  { num: "01", icon: Phone, title: "Entre em Contato", desc: "Fale conosco pelo WhatsApp ou preencha o simulador. É rápido e sem compromisso.", time: "30 segundos" },
  { num: "02", icon: FileCheck, title: "Análise Personalizada", desc: "Nossos consultores analisam seu perfil e encontram as melhores condições para você.", time: "Sem burocracia" },
  { num: "03", icon: Zap, title: "Aprovação Rápida", desc: "Com análise inteligente, seu crédito é aprovado em minutos, de forma 100% digital.", time: "Em minutos" },
  { num: "04", icon: Banknote, title: "Dinheiro na Conta", desc: "Após a assinatura digital do contrato, o dinheiro cai na sua conta em até 24 horas.", time: "Em até 24h" },
];

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Quero%20iniciar%20minha%20simulação!";

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="section-padding bg-background relative overflow-hidden">
      <AnimatedBackground variant="grid" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Processo Simples"
          title="Como"
          highlight="Funciona?"
          description="Do primeiro contato ao dinheiro na conta em 4 passos simples."
        />

        {/* Animated progress line (desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute left-[12.5%] right-[12.5%] top-0 h-0.5 bg-border/30 rounded-full" />
          <motion.div
            className="absolute left-[12.5%] top-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"
            style={{ width: lineWidth }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="p-6 h-full group">
                <span className="font-heading text-5xl font-bold text-primary/10 group-hover:text-primary/30 transition-all duration-500">
                  {step.num}
                </span>
                <motion.div
                  className="mt-2 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.5, type: "spring" }}
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="mt-4 font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                <span className="mt-3 inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {step.time}
                </span>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-gold font-heading font-bold text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px -5px hsl(var(--gold) / 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Iniciar Simulação
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
