import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import MagneticButton from "./MagneticButton";
import bgPattern from "@/assets/bg-pattern.jpg";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Quero%20falar%20com%20um%20especialista%20CredFort!";

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Parallax bg */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        <img src={bgPattern} alt="" className="w-full h-full object-cover opacity-35" loading="lazy" width={1920} height={1080} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />

      {/* Animated radial pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-slow opacity-10" style={{
        background: "radial-gradient(circle, hsl(var(--gold) / 0.4) 0%, transparent 70%)",
      }} />

      <motion.div
        className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl"
        style={{ scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="shimmer-badge inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Oferta por tempo limitado
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {"O capital que você precisa,".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="inline-block mr-[0.3em]"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <span className="text-gradient-gold">
              {"com a seriedade que você merece.".split(" ").map((w, i) => (
                <motion.span
                  key={`h-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                  className="inline-block mr-[0.3em]"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h2>

          <motion.p
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Junte-se a mais de <strong className="text-foreground">12.000 brasileiros</strong> que já transformaram suas finanças com a CredFort. Sem taxas ocultas, sem surpresas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-gold font-heading font-bold text-lg text-primary-foreground hover:shadow-[0_0_60px_-5px_hsl(var(--gold)/0.5)] transition-shadow animate-pulse-gold"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com Especialista
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
