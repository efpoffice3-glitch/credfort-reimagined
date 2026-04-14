import { Banknote, CalendarOff, ShieldCheck, Smartphone, Clock, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const SaqueAniversarioFGTS = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <ServicePageTemplate
      badge="Antecipação FGTS"
      title="Antecipe até 12 anos do seu"
      titleHighlight="saque-aniversário FGTS"
      description="Por que esperar se você pode ter o dinheiro agora? Antecipe o valor que seria liberado apenas no mês do seu aniversário pelos próximos anos. Sem parcelas mensais! O desconto é feito diretamente do seu FGTS anualmente."
      ctaText="Antecipar Meu FGTS"
      stats={[
        { value: "R$ 300", label: "Valor Mínimo" },
        { value: "R$ 50.000", label: "Valor Máximo" },
        { value: "1.49%", label: "Taxa a partir de" },
        { value: "12 anos", label: "Prazo Máximo" },
      ]}
      benefits={[
        { icon: <Banknote className="w-7 h-7 text-primary" />, title: "Dinheiro Agora", desc: "Receba antecipadamente o valor que só viria no mês do seu aniversário." },
        { icon: <CalendarOff className="w-7 h-7 text-primary" />, title: "Sem Parcelas Mensais", desc: "O desconto acontece apenas uma vez ao ano, direto do seu FGTS." },
        { icon: <ShieldCheck className="w-7 h-7 text-primary" />, title: "Salário Intacto", desc: "Seu salário não é comprometido. O desconto é exclusivamente do FGTS." },
        { icon: <Smartphone className="w-7 h-7 text-primary" />, title: "100% Digital", desc: "Todo o processo online, sem burocracia." },
        { icon: <Clock className="w-7 h-7 text-primary" />, title: "Liberação Rápida", desc: "Dinheiro na conta em até 24 horas após aprovação." },
        { icon: <Headphones className="w-7 h-7 text-primary" />, title: "Suporte Completo", desc: "Ajudamos você a ativar o saque-aniversário e entender cada etapa." },
      ]}
    />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default SaqueAniversarioFGTS;
