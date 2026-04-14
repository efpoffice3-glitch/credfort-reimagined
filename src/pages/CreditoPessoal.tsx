import { Zap, TrendingDown, ShieldCheck, Smartphone, CalendarClock, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CreditoPessoal = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <ServicePageTemplate
      badge="Crédito Pessoal"
      title="Dinheiro na conta para"
      titleHighlight="realizar seus sonhos"
      description="Precisa de dinheiro rápido sem burocracia? Nosso crédito pessoal é a solução perfeita. Aprovação em minutos, dinheiro na conta em até 24 horas. Taxas a partir de 1.29% ao mês."
      ctaText="Solicitar Meu Crédito"
      stats={[
        { value: "R$ 1.000", label: "Valor Mínimo" },
        { value: "R$ 100.000", label: "Valor Máximo" },
        { value: "1.29%", label: "Taxa a partir de" },
        { value: "60 meses", label: "Prazo Máximo" },
      ]}
      benefits={[
        { icon: <Zap className="w-7 h-7 text-primary" />, title: "Aprovação em Minutos", desc: "Análise de crédito rápida e totalmente digital. Sem filas, sem papelada, sem complicação." },
        { icon: <TrendingDown className="w-7 h-7 text-primary" />, title: "Taxas Competitivas", desc: "A partir de 1.29% ao mês. Condições melhores que bancos tradicionais." },
        { icon: <ShieldCheck className="w-7 h-7 text-primary" />, title: "100% Seguro", desc: "Contratação digital com criptografia bancária de ponta a ponta." },
        { icon: <Smartphone className="w-7 h-7 text-primary" />, title: "Totalmente Digital", desc: "Todo processo pelo celular ou computador. Sem ir a agências." },
        { icon: <CalendarClock className="w-7 h-7 text-primary" />, title: "Parcelas Flexíveis", desc: "Escolha o prazo ideal: de 12 a 60 meses para pagar." },
        { icon: <Headphones className="w-7 h-7 text-primary" />, title: "Atendimento VIP", desc: "Consultores dedicados via WhatsApp para te ajudar em cada etapa." },
      ]}
    />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default CreditoPessoal;
