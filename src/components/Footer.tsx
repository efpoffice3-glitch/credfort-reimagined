import { Link } from "react-router-dom";
import { MessageCircle, Shield, Lock, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20CredFort.";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="CredFort" className="h-8 w-8" />
            <span className="font-heading font-bold text-lg text-foreground">
              Cred<span className="text-primary">Fort</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Correspondente bancário autorizado. Crédito rápido, seguro e sem burocracia para realizar seus sonhos.
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> SSL</span>
            <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> LGPD</span>
            <span>BACEN</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Serviços</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Crédito Pessoal", path: "/credito-pessoal" },
              { label: "Crédito Consignado", path: "/credito-consignado" },
              { label: "Crédito com Garantia", path: "/credito-garantia" },
              { label: "Saque-Aniversário FGTS", path: "/saque-aniversario-fgts" },
              { label: "Limpa Nome", path: "/limpa-nome" },
            ].map((s) => (
              <Link key={s.path} to={s.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Institucional</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Sobre a CredFort</span>
            <span>Política de Privacidade</span>
            <span>Termos de Uso</span>
            <span>FAQ</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Contato</h4>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-gold font-heading font-semibold text-sm text-primary-foreground transition-all duration-300 hover:scale-105 hover:glow-gold"
          >
            <MessageCircle className="w-4 h-4" />
            +55 41 9567-6654
          </a>
          <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
            <Phone className="w-3 h-3" /> Atendimento seg-sex 8h às 20h
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CredFort Financeira. Todos os direitos reservados. Correspondente Bancário Autorizado.
      </div>
    </div>
  </footer>
);

export default Footer;
