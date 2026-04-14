import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  { q: "Quais documentos são necessários para solicitar crédito?", a: "Você precisa apenas de RG ou CNH, CPF, comprovante de residência e comprovante de renda. Todo o processo é digital, sem papelada!" },
  { q: "Quanto tempo leva para o dinheiro cair na minha conta?", a: "Após a aprovação e assinatura digital do contrato, o dinheiro é depositado em até 24 horas úteis na sua conta bancária." },
  { q: "Vocês consultam o SPC/Serasa?", a: "Na etapa de simulação, não fazemos nenhuma consulta. A análise completa é feita apenas quando você decide prosseguir, e trabalhamos com diversas opções mesmo para quem tem restrição." },
  { q: "Qual é a taxa de juros?", a: "Nossas taxas começam a partir de 1.29% ao mês, variando conforme o tipo de crédito, perfil do cliente e garantias oferecidas." },
  { q: "Posso quitar o crédito antecipadamente?", a: "Sim! Você pode quitar a qualquer momento com desconto proporcional nos juros. Sem multas ou taxas extras pela antecipação." },
  { q: "A CredFort é confiável?", a: "Somos correspondentes bancários autorizados, com certificação BACEN, SSL seguro, conformidade LGPD e mais de 12.000 clientes satisfeitos em todo o Brasil." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <SectionHeading title="Dúvidas" highlight="Frequentes" description="Tire suas dúvidas sobre nossos serviços de crédito" />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`glass-card rounded-xl overflow-hidden relative faq-active-bar ${isOpen ? "active border-primary/30" : ""} transition-colors duration-300`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <motion.span
                    className={`font-heading text-sm font-bold transition-colors duration-300 ${isOpen ? "text-primary" : "text-muted-foreground"}`}
                    animate={{ scale: isOpen ? 1.1 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <span className="font-heading font-semibold text-foreground flex-1">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <p className="px-5 pb-5 pl-14 text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
