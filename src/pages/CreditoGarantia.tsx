import { TrendingDown, Home, ShieldCheck, Smartphone, CalendarClock, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CreditoGarantia = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <ServicePageTemplate
      variant="garantia"
      badge="Crédito com Garantia"
      title="Taxas até 5x menores usando"
      titleHighlight="seu imóvel ou veículo"
      description="Transforme seu patrimônio em poder de compra. Com seu imóvel ou veículo como garantia, você acessa as menores taxas do mercado. Ideal para quem precisa de valores altos com parcelas que cabem no bolso."
      ctaText="Simular com Meu Bem"
      stats={[
        { value: "R$ 30.000", label: "Valor Mínimo" },
        { value: "R$ 3.000.000", label: "Valor Máximo" },
        { value: "0,89%", label: "Taxa a partir de" },
        { value: "240 meses", label: "Prazo Máximo" },
      ]}
      benefits={[
        { icon: <TrendingDown className="w-7 h-7 text-primary" />, title: "Taxas até 3x Menores", desc: "Com a garantia do seu bem, conseguimos oferecer taxas muito mais baixas que qualquer empréstimo pessoal." },
        { icon: <Home className="w-7 h-7 text-primary" />, title: "Até 60% do Valor do Imóvel", desc: "Utilize até 60% do valor avaliado do seu imóvel como crédito." },
        { icon: <ShieldCheck className="w-7 h-7 text-primary" />, title: "Seu Bem Continua com Você", desc: "Você continua usando seu imóvel ou veículo normalmente durante todo o contrato." },
        { icon: <Smartphone className="w-7 h-7 text-primary" />, title: "Processo Digital", desc: "Avaliação e aprovação sem precisar sair de casa." },
        { icon: <CalendarClock className="w-7 h-7 text-primary" />, title: "Até 240 Meses", desc: "Parcelas baixas com prazos de até 20 anos." },
        { icon: <Headphones className="w-7 h-7 text-primary" />, title: "Consultoria Gratuita", desc: "Orientação completa sobre a melhor forma de usar seu patrimônio." },
      ]}
    />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default CreditoGarantia;
