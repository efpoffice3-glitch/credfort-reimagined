import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Lock, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Fiz%20uma%20simulação%20e%20gostaria%20de%20garantir%20minha%20taxa%20especial!";

const SimulatorSection = () => {
  const [valor, setValor] = useState(50000);
  const [prazo, setPrazo] = useState(24);
  const taxa = 1.29;
  const taxaDecimal = taxa / 100;
  const parcela = valor * (taxaDecimal * Math.pow(1 + taxaDecimal, prazo)) / (Math.pow(1 + taxaDecimal, prazo) - 1);

  return (
    <section id="simulador" className="section-padding bg-card/50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Simulador Inteligente"
          title="Simule agora e descubra"
          highlight="sua melhor condição"
          description="Use nosso simulador para ter uma estimativa das parcelas. Sem compromisso, sem consulta ao SPC/Serasa nesta etapa."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex flex-col gap-4">
              {[
                "Taxas a partir de 1.29% ao mês",
                "Sem consulta inicial ao SPC/Serasa",
                "Aprovação em menos de 5 minutos",
                "Dinheiro na conta em até 24 horas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 glow-gold-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-bold text-xl text-foreground">Simule seu Crédito</h3>
              <span className="flex items-center gap-1 text-xs text-primary"><Lock className="w-3 h-3" /> Seguro</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Valor do Crédito</span>
                  <span className="font-heading font-bold text-foreground">R$ {valor.toLocaleString("pt-BR")}</span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={500000}
                  step={1000}
                  value={valor}
                  onChange={(e) => setValor(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
                  style={{ accentColor: "hsl(var(--primary))" }}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>R$ 5.000</span>
                  <span>R$ 500.000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Prazo de Pagamento</span>
                  <span className="font-heading font-bold text-foreground">{prazo} meses</span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={120}
                  step={6}
                  value={prazo}
                  onChange={(e) => setPrazo(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: "hsl(var(--primary))" }}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>12 meses</span>
                  <span>120 meses</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-secondary/50">
                <div>
                  <div className="text-xs text-muted-foreground">Parcela Estimada</div>
                  <div className="font-heading text-2xl font-bold text-gradient-gold">
                    R$ {parcela.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Taxa Mensal</div>
                  <div className="font-heading text-2xl font-bold text-foreground">A partir de {taxa}%</div>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-gold font-heading font-bold text-primary-foreground hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                GARANTIR MINHA TAXA ESPECIAL
              </a>

              <p className="text-xs text-center text-muted-foreground">
                *Sujeito a análise de crédito. Processamento 100% criptografado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
