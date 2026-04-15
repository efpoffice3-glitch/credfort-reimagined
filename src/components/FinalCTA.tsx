import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import RotatingWords from "./RotatingWords";
import ParticleField from "./ParticleField";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Quero%20falar%20com%20um%20especialista%20CredFort!";

const rotatingCTA = [
  "seus sonhos",
  "sua casa própria",
  "seu negócio",
  "sua liberdade financeira",
  "seu futuro",
];

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />

      {/* Particles */}
      <ParticleField count={35} color="var(--gold)" />

      {/* Pulsing glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.15) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl"
        style={{ scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="shimmer-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-3 h-3" />
            Oferta por tempo limitado
          </motion.span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {"O capital que você precisa para realizar".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <RotatingWords words={rotatingCTA} interval={3000} className="min-w-[200px] sm:min-w-[320px]" />
          </h2>

          <motion.p
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Junte-se a mais de <strong className="text-foreground">12.000 brasileiros</strong> que já transformaram suas finanças com a CredFort. Sem taxas ocultas, sem surpresas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-gold font-heading font-bold text-lg text-primary-foreground hover:shadow-[0_0_60px_-5px_hsl(var(--gold)/0.5)] transition-shadow animate-pulse-gold"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com Especialista
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>

          <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Atendimento seguro e confidencial
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
