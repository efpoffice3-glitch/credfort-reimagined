import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck } from "lucide-react";
import bgPattern from "@/assets/bg-pattern.jpg";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Quero%20falar%20com%20um%20especialista%20CredFort!";

const FinalCTA = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0">
      <img src={bgPattern} alt="" className="w-full h-full object-cover opacity-40" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
          Oferta por tempo limitado
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          O capital que você precisa,{" "}
          <span className="text-gradient-gold">com a seriedade que você merece.</span>
        </h2>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Junte-se a mais de <strong className="text-foreground">12.000 brasileiros</strong> que já transformaram suas finanças com a CredFort. Sem taxas ocultas, sem surpresas.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-gold font-heading font-bold text-lg text-primary-foreground hover:scale-105 transition-transform animate-pulse-gold"
        >
          <MessageCircle className="w-6 h-6" />
          Falar com Especialista
        </a>

        <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary" />
          Atendimento seguro e confidencial
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
