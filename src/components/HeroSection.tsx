import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, TrendingUp, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import MagneticButton from "./MagneticButton";
import AnimatedBackground from "./AnimatedBackground";
import heroImg from "@/assets/hero-home.jpg";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Quero%20solicitar%20crédito%20agora!";

const words = ["O crédito que você precisa,"];
const highlight = "na velocidade que você merece.";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const badgePills = [
    { icon: ShieldCheck, text: "Sem consulta ao SPC/Serasa" },
    { icon: Clock, text: "Aprovação em minutos" },
    { icon: CheckCircle, text: "100% Seguro" },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: imgY, scale: imgScale }}>
        <img src={heroImg} alt="Família CredFort" className="w-full h-full object-cover opacity-25" width={1920} height={1080} />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Animated orbs */}
      <AnimatedBackground variant="orbs" />

      {/* Content with parallax */}
      <motion.div
        className="container mx-auto px-4 lg:px-8 relative z-10 will-change-transform"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-3xl">
          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
          >
            <CountdownTimer />
          </motion.div>

          {/* Badge with shimmer */}
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="shimmer-badge inline-block mt-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20"
          >
            Correspondente Bancário Autorizado
          </motion.span>

          {/* H1 with staggered word reveal */}
          <h1 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
            {words.map((word, wi) => (
              <span key={wi} className="inline">
                {word.split(" ").map((w, i) => (
                  <motion.span
                    key={`${wi}-${i}`}
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="inline-block mr-[0.3em]"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            ))}
            <br />
            <span className="text-gradient-gold italic">
              {highlight.split(" ").map((w, i) => (
                <motion.span
                  key={`h-${i}`}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block mr-[0.3em]"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Esqueça a burocracia dos bancos tradicionais. Aqui você tem{" "}
            <strong className="text-foreground">aprovação em minutos</strong> e{" "}
            <strong className="text-foreground">dinheiro na conta em até 24 horas</strong>.
          </motion.p>

          {/* Badge pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {badgePills.map(({ icon: Icon, text }, i) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 1.4 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm text-muted-foreground"
              >
                <Icon className="w-4 h-4 text-primary" /> {text}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-gold font-heading font-bold text-base text-primary-foreground transition-all duration-300 hover:shadow-[0_0_50px_-5px_hsl(var(--gold)/0.5)] animate-pulse-gold"
            >
              <MessageCircle className="w-5 h-5" />
              SOLICITAR CRÉDITO AGORA
            </MagneticButton>
            <a
              href="#simulador"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-border bg-secondary/50 font-heading font-semibold text-base text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 text-primary" />
              Simular Parcelas
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
