import { BadgePercent, CalendarCheck, ShieldCheck, Eye, Smartphone, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const LimpaNome = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <ServicePageTemplate
      variant="limpanome"
      badge="Limpa Nome"
      title="Saia do vermelho e"
      titleHighlight="recupere seu crédito"
      description="Chega de viver com restrição no nome! Negociamos suas dívidas com descontos de até 90%. Limpe seu nome, recupere seu crédito e volte a realizar seus sonhos. Atendimento 100% sigiloso e personalizado."
      ctaText="Limpar Meu Nome"
      stats={[
        { value: "R$ 100", label: "Valor Mínimo" },
        { value: "R$ 500.000", label: "Valor Máximo" },
        { value: "0%", label: "Taxa a partir de" },
        { value: "120 meses", label: "Prazo Máximo" },
      ]}
      benefits={[
        { icon: <BadgePercent className="w-7 h-7 text-primary" />, title: "Descontos de até 90%", desc: "Negociamos diretamente com os credores para conseguir os maiores descontos possíveis." },
        { icon: <CalendarCheck className="w-7 h-7 text-primary" />, title: "Nome Limpo em 5 Dias", desc: "Após o acordo, seu nome é retirado dos órgãos de proteção em poucos dias." },
        { icon: <ShieldCheck className="w-7 h-7 text-primary" />, title: "100% Sigiloso", desc: "Atendimento discreto e confidencial. Sua privacidade é nossa prioridade." },
        { icon: <Eye className="w-7 h-7 text-primary" />, title: "Análise Gratuita", desc: "Consultamos sua situação sem custo e sem compromisso." },
        { icon: <Smartphone className="w-7 h-7 text-primary" />, title: "Processo Digital", desc: "Tudo resolvido pelo WhatsApp, sem precisar sair de casa." },
        { icon: <Headphones className="w-7 h-7 text-primary" />, title: "Negociação Especializada", desc: "Equipe treinada para conseguir as melhores condições de renegociação." },
      ]}
    />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default LimpaNome;
