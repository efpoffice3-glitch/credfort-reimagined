import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import CreditoPessoal from "./pages/CreditoPessoal";
import CreditoConsignado from "./pages/CreditoConsignado";
import CreditoGarantia from "./pages/CreditoGarantia";
import SaqueAniversarioFGTS from "./pages/SaqueAniversarioFGTS";
import LimpaNome from "./pages/LimpaNome";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/credito-pessoal" element={<CreditoPessoal />} />
          <Route path="/credito-consignado" element={<CreditoConsignado />} />
          <Route path="/credito-garantia" element={<CreditoGarantia />} />
          <Route path="/saque-aniversario-fgts" element={<SaqueAniversarioFGTS />} />
          <Route path="/limpa-nome" element={<LimpaNome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
