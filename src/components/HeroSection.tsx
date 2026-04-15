import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, TrendingUp, ShieldCheck, Clock, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import MagneticButton from "./MagneticButton";
import RotatingWords from "./RotatingWords";
import ParticleField from "./ParticleField";
import heroImg from "@/assets/hero-home.jpg";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Quero%20solicitar%20crédito%20agora!";

const badgePills = [
  { icon: ShieldCheck, text: "Sem consulta ao SPC/Serasa" },
  { icon: Clock, text: "Aprovação em minutos" },
  { icon: CheckCircle, text: "100% Seguro" },
];

const rotatingKeywords = [
  "crédito rápido",
  "taxas imbatíveis",
  "aprovação imediata",
  "dinheiro na conta",
  "parcelas que cabem",
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: imgY, scale: imgScale }}>
        <img
          src={heroImg}
          alt="Família brasileira feliz — CredFort"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Overlays — let image breathe on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      {/* Floating particles */}
      <ParticleField count={25} />

      {/* Accent glow */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 will-change-transform pt-28 pb-20 lg:pt-36 lg:pb-28"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            <CountdownTimer />
          </motion.div>

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="shimmer-badge inline-flex items-center gap-2 mt-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20"
          >
            <Sparkles className="w-3 h-3" />
            Correspondente Bancário Autorizado
          </motion.span>

          {/* Animated H1 with rotating words */}
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-foreground">
            {"Transforme sua vida com".split(" ").map((w, i) => (
              <motion.span
                key={`w-${i}`}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.3em]"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="italic"
            >
              <RotatingWords words={rotatingKeywords} interval={2800} className="min-w-[280px] sm:min-w-[380px]" />
            </motion.span>
          </h1>

          {/* Subheadline with typewriter feel */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Mais de <strong className="text-foreground">12.000 brasileiros</strong> já conquistaram{" "}
            <strong className="text-foreground">aprovação em minutos</strong> e receberam o dinheiro{" "}
            <strong className="text-foreground">em até 24 horas</strong>. É a sua vez.
          </motion.p>

          {/* Badge pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {badgePills.map(({ icon: Icon, text }, i) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm text-muted-foreground"
              >
                <Icon className="w-4 h-4 text-primary" /> {text}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-gold font-heading font-bold text-base text-primary-foreground transition-all duration-300 hover:shadow-[0_0_60px_-5px_hsl(var(--gold)/0.5)] animate-pulse-gold"
            >
              <MessageCircle className="w-5 h-5" />
              SOLICITAR CRÉDITO AGORA
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <a
              href="#simulador"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-border bg-secondary/50 font-heading font-semibold text-base text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 text-primary" />
              Simular Parcelas
              <ArrowRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
