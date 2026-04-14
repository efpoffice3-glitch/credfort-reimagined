import { TrendingDown, FileText, ShieldCheck, Smartphone, CalendarClock, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CreditoConsignado = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <ServicePageTemplate
      variant="consignado"
      badge="Crédito Consignado"
      title="As menores taxas para"
      titleHighlight="aposentados e servidores"
      description="Você que é aposentado, pensionista ou servidor público merece as melhores condições. Crédito consignado com taxas a partir de 1.29% ao mês, desconto direto em folha e aprovação facilitada."
      ctaText="Simular Meu Consignado"
      stats={[
        { value: "R$ 500", label: "Valor Mínimo" },
        { value: "R$ 500.000", label: "Valor Máximo" },
        { value: "1,29%", label: "Taxa a partir de" },
        { value: "120 meses", label: "Prazo Máximo" },
      ]}
      benefits={[
        { icon: <TrendingDown className="w-7 h-7 text-primary" />, title: "Menor Taxa do Mercado", desc: "Taxas a partir de 1.29% ao mês, muito abaixo dos bancos tradicionais." },
        { icon: <FileText className="w-7 h-7 text-primary" />, title: "Desconto em Folha", desc: "Parcela descontada automaticamente. Sem preocupação com boletos ou atrasos." },
        { icon: <ShieldCheck className="w-7 h-7 text-primary" />, title: "100% Seguro", desc: "Operação regulamentada pelo INSS e Banco Central." },
        { icon: <Smartphone className="w-7 h-7 text-primary" />, title: "Sem Burocracia", desc: "Processo simplificado para aposentados e servidores públicos." },
        { icon: <CalendarClock className="w-7 h-7 text-primary" />, title: "Até 120 Meses", desc: "Parcelas que cabem no bolso com prazos estendidos." },
        { icon: <Headphones className="w-7 h-7 text-primary" />, title: "Suporte Especializado", desc: "Consultores treinados para atender aposentados e servidores." },
      ]}
    />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default CreditoConsignado;
