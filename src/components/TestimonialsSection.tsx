import { useCallback, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: "Precisava de capital de giro urgente e a CredFort resolveu em menos de 24 horas. Taxa muito melhor que o banco tradicional. Recomendo demais!",
    name: "Carlos Eduardo",
    role: "Empresário • São Paulo, SP",
  },
  {
    text: "Achei que seria difícil conseguir crédito como autônoma, mas o atendimento foi excepcional. Tudo pelo WhatsApp, sem burocracia nenhuma.",
    name: "Maria Fernanda",
    role: "Autônoma • Curitiba, PR",
  },
  {
    text: "Já fiz 3 operações com a CredFort. Sempre com as melhores condições e um atendimento nota 10. Viraram meu parceiro de negócios.",
    name: "Roberto Almeida",
    role: "Comerciante • Rio de Janeiro, RJ",
  },
  {
    text: "Financiei equipamentos para minha clínica com taxas muito competitivas. O processo todo foi super rápido e transparente.",
    name: "Ana Paula",
    role: "Dentista • Belo Horizonte, MG",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="section-padding bg-card/50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="O que nossos clientes"
          highlight="dizem"
          description="Mais de 12.000 brasileiros já transformaram suas finanças com a CredFort"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="flex-[0_0_100%] md:flex-[0_0_48%] min-w-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="glass-card-hover rounded-2xl p-8 relative h-full">
                    <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center font-heading font-bold text-primary-foreground text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-sm text-foreground">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            <div className="flex gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === selectedIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
