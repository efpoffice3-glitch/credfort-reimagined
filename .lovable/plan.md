

## Plano: Animações Avançadas, Parallax e Diferenciação entre Páginas

### Problema Atual
- Todas as seções usam o mesmo padrão de animação: `opacity: 0, y: 30 → opacity: 1, y: 0`
- Hero sem parallax, apenas imagem estática com gradiente
- Páginas de serviço (5 no total) são idênticas — todas usam `ServicePageTemplate` sem variação visual
- Sem efeitos de scroll avançados (stagger, reveal, counter animado, etc.)

---

### O que será feito

#### 1. Hero com Parallax e Animações Avançadas
- Efeito parallax na imagem de fundo usando `useScroll` + `useTransform` do Framer Motion (imagem se move a 50% da velocidade do scroll)
- Partículas/orbs flutuantes decorativas com gradiente dourado (SVG animado com CSS)
- Texto do H1 com animação de reveal palavra por palavra (staggered)
- Badge animado com efeito shimmer contínuo
- Botão CTA com efeito magnético no hover (slight pull toward cursor)

#### 2. Componente `useScrollAnimation` Hook
- Hook reutilizável que cria variantes de animação diferentes: `fadeUp`, `fadeLeft`, `fadeRight`, `scaleIn`, `blurIn`, `slideReveal`
- Cada seção da Home usará uma variante diferente para evitar monotonia

#### 3. StatsBar — Counter Animado
- Números animam de 0 ao valor final quando entram no viewport (animated counter)
- Efeito de glow pulsante individual em cada stat

#### 4. HowItWorks — Timeline Animada
- Linha de conexão animada entre os steps (draw-on-scroll usando SVG path)
- Cards com stagger mais pronunciado e efeito de scale no hover com rotação 3D sutil (`perspective`, `rotateY`)

#### 5. SimulatorSection — Interatividade Avançada
- Slider customizado com track dourado e thumb animado
- Valor da parcela com animação de transição numérica suave (spring animation)
- Card do simulador com borda gradiente animada (rotating border gradient)

#### 6. WhyChoose — Grid com Reveal Escalonado
- Cards entram com `blurIn` (desfocado → focado) em stagger
- Ícone com animação de bounce ao entrar no viewport
- Borda inferior do card que "preenche" com gradiente dourado no hover

#### 7. TestimonialsSection — Carrossel Animado
- Transformar grid estático em carrossel automático com Embla (já instalado)
- Transição de slide com efeito de fade + scale
- Indicadores de dot com animação de progresso

#### 8. FAQSection — Accordion Premium
- Animação de expand/collapse mais suave com spring physics
- Número de índice animado que muda de cor ao abrir
- Linha lateral dourada que aparece no item ativo

#### 9. FinalCTA — Background Animado
- Gradiente radial animado que pulsa lentamente
- Texto com efeito typewriter ou reveal escalonado
- Botão com partículas de confetti dourado ao hover

#### 10. Diferenciação das Páginas de Serviço
Cada página terá uma identidade visual única dentro do `ServicePageTemplate`:
- **Prop `variant`** adicionada ao template com 5 opções: `personal`, `consignado`, `garantia`, `fgts`, `limpanome`
- Cada variant terá:
  - **Cor de acento secundária** diferente (azul, verde, roxo, teal, vermelho)
  - **Padrão de background** diferente no hero (gradient angular vs radial vs mesh)
  - **Layout do hero** alternado (texto esquerda vs centralizado vs split)
  - **Ícone decorativo** grande e semi-transparente no hero (único por serviço)

#### 11. Animated Background Patterns
- Componente `AnimatedBackground` com grid de pontos que se movem sutilmente com o mouse (`onMouseMove`)
- Gradientes mesh animados usando CSS `@keyframes` para backgrounds das seções

---

### Arquivos a criar/editar

| Arquivo | Ação |
|---------|------|
| `src/hooks/useScrollAnimation.ts` | Criar — hook com variantes de animação |
| `src/hooks/useParallax.ts` | Criar — hook de parallax com useScroll |
| `src/hooks/useCountUp.ts` | Criar — hook de counter animado |
| `src/components/AnimatedBackground.tsx` | Criar — background com partículas/orbs |
| `src/components/MagneticButton.tsx` | Criar — botão com efeito magnético |
| `src/components/AnimatedCounter.tsx` | Criar — componente de counter |
| `src/components/HeroSection.tsx` | Editar — parallax, partículas, text reveal |
| `src/components/StatsBar.tsx` | Editar — counter animado |
| `src/components/HowItWorks.tsx` | Editar — timeline SVG, 3D hover |
| `src/components/SimulatorSection.tsx` | Editar — slider custom, border gradient |
| `src/components/WhyChoose.tsx` | Editar — blurIn, hover effects |
| `src/components/TestimonialsSection.tsx` | Editar — carrossel com Embla |
| `src/components/FAQSection.tsx` | Editar — spring accordion, active indicator |
| `src/components/FinalCTA.tsx` | Editar — animated gradient, text reveal |
| `src/components/ServicePageTemplate.tsx` | Editar — prop variant, layouts distintos |
| `src/pages/CreditoPessoal.tsx` | Editar — passar variant="personal" |
| `src/pages/CreditoConsignado.tsx` | Editar — passar variant="consignado" |
| `src/pages/CreditoGarantia.tsx` | Editar — passar variant="garantia" |
| `src/pages/SaqueAniversarioFGTS.tsx` | Editar — passar variant="fgts" |
| `src/pages/LimpaNome.tsx` | Editar — passar variant="limpanome" |
| `src/index.css` | Editar — adicionar keyframes e utilities |

### Detalhes Técnicos
- Todas as animações usam Framer Motion (`useScroll`, `useTransform`, `useInView`, `useSpring`)
- Parallax e mouse-tracking com `useMotionValue` para performance (GPU-accelerated)
- Carrossel usa `embla-carousel-react` já presente no projeto
- Sem dependências novas necessárias
- `will-change: transform` nos elementos de parallax para evitar jank

