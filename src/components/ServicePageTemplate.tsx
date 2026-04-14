import { ReactNode } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, CheckCircle, Phone, FileCheck, Zap, Banknote, Lock, Wallet, Home, CreditCard, FileX, Landmark } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import AnimatedBackground from "./AnimatedBackground";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import { getStaggerProps } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

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
  variant?: "personal" | "consignado" | "garantia" | "fgts" | "limpanome";
}

const variantConfig = {
  personal: {
    bgVariant: "orbs" as const,
    accentColor: "var(--accent-blue)",
    heroIcon: Wallet,
    heroAlign: "left" as const,
    gradient: "from-blue-500/5 via-background to-background",
  },
  consignado: {
    bgVariant: "mesh" as const,
    accentColor: "var(--accent-green)",
    heroIcon: Landmark,
    heroAlign: "center" as const,
    gradient: "from-emerald-500/5 via-background to-background",
  },
  garantia: {
    bgVariant: "radial" as const,
    accentColor: "var(--accent-purple)",
    heroIcon: Home,
    heroAlign: "left" as const,
    gradient: "from-purple-500/5 via-background to-background",
  },
  fgts: {
    bgVariant: "diagonal" as const,
    accentColor: "var(--accent-teal)",
    heroIcon: CreditCard,
    heroAlign: "center" as const,
    gradient: "from-teal-500/5 via-background to-background",
  },
  limpanome: {
    bgVariant: "grid" as const,
    accentColor: "var(--accent-red)",
    heroIcon: FileX,
    heroAlign: "left" as const,
    gradient: "from-red-500/5 via-background to-background",
  },
};

const StatItem = ({ stat, index }: { stat: { value: string; label: string }; index: number }) => {
  // Extract number for animation
  const numMatch = stat.value.match(/([\d.,]+)/);
  const num = numMatch ? parseFloat(numMatch[1].replace(".", "").replace(",", ".")) : 0;
  const hasDecimals = stat.value.includes(",") || stat.value.includes(".");
  const { count, ref } = useCountUp(num, 1800, hasDecimals ? 2 : 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="text-center"
    >
      <div className="font-heading text-2xl md:text-3xl font-bold text-gradient-gold">
        {stat.value.replace(numMatch?.[1] || "", hasDecimals ? count.toFixed(2) : Math.round(count).toLocaleString("pt-BR"))}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
    </motion.div>
  );
};

const ServicePageTemplate = ({ badge, title, titleHighlight, description, ctaText, stats, benefits, variant = "personal" }: ServicePageProps) => {
  const config = variantConfig[variant];
  const HeroIcon = config.heroIcon;
  const isCenter = config.heroAlign === "center";

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${config.gradient}`} />
        <AnimatedBackground variant={config.bgVariant} accentColor={config.accentColor} />

        {/* Large decorative icon */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <HeroIcon className="w-[400px] h-[400px]" strokeWidth={0.5} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className={`${isCenter ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}`}>
            <motion.div initial={{ opacity: 0, y: -10, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.5 }}>
              <CountdownTimer />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, x: isCenter ? 0 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="shimmer-badge inline-block mt-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20"
            >
              {badge}
            </motion.span>

            <h1 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {title.split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                  className="inline-block mr-[0.3em]"
                >
                  {w}
                </motion.span>
              ))}
              <br />
              <span className="text-gradient-gold">
                {titleHighlight.split(" ").map((w, i) => (
                  <motion.span
                    key={`h-${i}`}
                    initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.6 + i * 0.06, duration: 0.5 }}
                    className="inline-block mr-[0.3em]"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className={`mt-6 text-lg text-muted-foreground leading-relaxed ${isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className={`mt-6 flex flex-wrap gap-3 ${isCenter ? "justify-center" : ""}`}
            >
              {[
                { icon: ShieldCheck, text: "100% Seguro" },
                { icon: Clock, text: "Dinheiro em 24h" },
                { icon: CheckCircle, text: "Sem burocracia" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.1, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm text-muted-foreground"
                >
                  <Icon className="w-4 h-4 text-primary" /> {text}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className={`mt-10 flex flex-col sm:flex-row gap-4 ${isCenter ? "justify-center" : ""}`}
            >
              <MagneticButton
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-gold font-heading font-bold text-primary-foreground hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.4)] transition-shadow animate-pulse-gold"
              >
                <MessageCircle className="w-5 h-5" />
                {ctaText}
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="py-10 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <StatItem key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="section-padding bg-background relative overflow-hidden">
        {config.bgVariant === "diagonal" && (
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 40px, hsl(var(--gold)) 40px, hsl(var(--gold)) 41px)",
          }} />
        )}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading badge="Processo Simples" title="Como" highlight="Funciona?" description="Do primeiro contato ao dinheiro na conta em 4 passos simples" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", icon: Phone, title: "Entre em Contato", desc: "Fale conosco pelo WhatsApp", time: "30 segundos" },
              { num: "02", icon: FileCheck, title: "Análise Personalizada", desc: "Avaliamos seu perfil", time: "Sem burocracia" },
              { num: "03", icon: Zap, title: "Aprovação Rápida", desc: "Crédito aprovado rapidamente", time: "Em minutos" },
              { num: "04", icon: Banknote, title: "Dinheiro na Conta", desc: "Valor liberado na sua conta", time: "Em até 24h" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                {...getStaggerProps("blurIn", i, 0.15)}
                className="glass-card-hover rounded-2xl p-6 group perspective-card"
                whileHover={{ rotateY: 4, scale: 1.02, transition: { duration: 0.3 } }}
              >
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
      <section className="section-padding bg-card/50 relative overflow-hidden">
        <AnimatedBackground variant={config.bgVariant === "orbs" ? "grid" : config.bgVariant} accentColor={config.accentColor} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading badge="Vantagens Exclusivas" title="Por que escolher nosso" highlight={badge + "?"} description="Oferecemos as melhores condições do mercado com atendimento humanizado e taxas justas" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                {...getStaggerProps("blurIn", i, 0.1)}
                className="glass-card-hover rounded-2xl p-8 group relative overflow-hidden"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-700" />
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300"
                  whileInView={{ scale: [0.5, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5, type: "spring" }}
                >
                  {b.icon}
                </motion.div>
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
};

export default ServicePageTemplate;
