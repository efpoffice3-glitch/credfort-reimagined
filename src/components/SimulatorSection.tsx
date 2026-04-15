import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, animate } from "framer-motion";
import { MessageCircle, Lock, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedBackground from "./AnimatedBackground";
import GlowCard from "./GlowCard";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Fiz%20uma%20simulação%20e%20gostaria%20de%20garantir%20minha%20taxa%20especial!";

const AnimatedNumber = ({ value }: { value: number }) => {
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 80, damping: 25 });
  const [display, setDisplay] = useState("0,00");

  useEffect(() => {
    const controls = animate(motionVal, value, {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    return controls.stop;
  }, [value, motionVal]);

  useEffect(() => {
    const unsub = springVal.on("change", (v) => {
      setDisplay(v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    });
    return unsub;
  }, [springVal]);

  return <span>{display}</span>;
};

const checkItems = [
  "Taxas a partir de 1.29% ao mês",
  "Sem consulta inicial ao SPC/Serasa",
  "Aprovação em menos de 5 minutos",
  "Dinheiro na conta em até 24 horas",
];

const SimulatorSection = () => {
  const [valor, setValor] = useState(50000);
  const [prazo, setPrazo] = useState(24);
  const taxa = 1.29;
  const taxaDecimal = taxa / 100;
  const parcela = valor * (taxaDecimal * Math.pow(1 + taxaDecimal, prazo)) / (Math.pow(1 + taxaDecimal, prazo) - 1);

  return (
    <section id="simulador" className="section-padding bg-card/50 relative overflow-hidden">
      <AnimatedBackground variant="mesh" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          badge="Simulador Inteligente"
          title="Simule agora e descubra"
          highlight="sua melhor condição"
          description="Use nosso simulador para ter uma estimativa das parcelas. Sem compromisso."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-5">
              {checkItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring" }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm text-muted-foreground leading-relaxed"
            >
              <strong className="text-foreground">+12.000 clientes</strong> já simularam e contrataram com as melhores condições do mercado.
            </motion.p>
          </motion.div>

          {/* Simulator card */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlowCard className="p-8 gradient-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Simule seu Crédito
                </h3>
                <span className="flex items-center gap-1 text-xs text-primary">
                  <Lock className="w-3 h-3" /> Seguro
                </span>
              </div>

              <div className="space-y-6">
                {/* Valor slider */}
                <div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-muted-foreground">Valor do Crédito</span>
                    <motion.span
                      className="font-heading font-bold text-foreground"
                      key={valor}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      R$ {valor.toLocaleString("pt-BR")}
                    </motion.span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={500000}
                    step={1000}
                    value={valor}
                    onChange={(e) => setValor(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer slider-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>R$ 5.000</span>
                    <span>R$ 500.000</span>
                  </div>
                </div>

                {/* Prazo slider */}
                <div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-muted-foreground">Prazo de Pagamento</span>
                    <motion.span
                      className="font-heading font-bold text-foreground"
                      key={prazo}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {prazo} meses
                    </motion.span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={120}
                    step={6}
                    value={prazo}
                    onChange={(e) => setPrazo(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer slider-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>12 meses</span>
                    <span>120 meses</span>
                  </div>
                </div>

                {/* Results */}
                <motion.div className="grid grid-cols-2 gap-4 p-5 rounded-xl bg-secondary/50 border border-border/30" layout>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Parcela Estimada</div>
                    <div className="font-heading text-2xl font-bold text-gradient-gold">
                      R$ <AnimatedNumber value={parcela} />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Taxa Mensal</div>
                    <div className="font-heading text-2xl font-bold text-foreground">A partir de {taxa}%</div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-gold font-heading font-bold text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 50px -5px hsl(var(--gold) / 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  GARANTIR MINHA TAXA ESPECIAL
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>

                <p className="text-xs text-center text-muted-foreground">
                  *Sujeito a análise de crédito. Processamento 100% criptografado.
                </p>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
