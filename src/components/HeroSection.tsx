import { motion } from "framer-motion";
import { MessageCircle, TrendingUp, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import heroImg from "@/assets/hero-home.jpg";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Quero%20solicitar%20crédito%20agora!";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Família CredFort" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <CountdownTimer />
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mt-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20"
        >
          Correspondente Bancário Autorizado
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground"
        >
          O crédito que você precisa,{" "}
          <span className="text-gradient-gold italic">na velocidade que você merece.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
        >
          Esqueça a burocracia dos bancos tradicionais. Aqui você tem{" "}
          <strong className="text-foreground">aprovação em minutos</strong> e{" "}
          <strong className="text-foreground">dinheiro na conta em até 24 horas</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {[
            { icon: ShieldCheck, text: "Sem consulta ao SPC/Serasa" },
            { icon: Clock, text: "Aprovação em minutos" },
            { icon: CheckCircle, text: "100% Seguro" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm text-muted-foreground">
              <Icon className="w-4 h-4 text-primary" /> {text}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-gold font-heading font-bold text-base text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.4)] animate-pulse-gold"
          >
            <MessageCircle className="w-5 h-5" />
            SOLICITAR CRÉDITO AGORA
          </a>
          <a
            href="#simulador"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-border bg-secondary/50 font-heading font-semibold text-base text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-300"
          >
            <TrendingUp className="w-5 h-5 text-primary" />
            Simular Parcelas
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
