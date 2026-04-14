import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5541956766654?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20CredFort.";

const WhatsAppButton = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    aria-label="WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;
