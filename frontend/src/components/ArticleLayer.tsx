import { useEffect, useRef, useState } from 'react';
import type { LayerContent } from '@/data/articles';
import CountUpStat from './CountUpStat';
import QuoteBlock from './QuoteBlock';

interface ArticleLayerProps {
  layer: LayerContent;
  layerIndex: number;
  isVisible: boolean;
}

const accentStyles = {
  green: {
    titleColor: 'text-neon-green',
    glowClass: 'glow-green',
    boxGlow: 'glow-box-green',
    borderColor: 'border-neon-green',
    bgGradient: 'from-neon-green/5 to-transparent',
    layerLabel: 'CAPA 01',
  },
  cyan: {
    titleColor: 'text-neon-cyan',
    glowClass: 'glow-cyan',
    boxGlow: 'glow-box-cyan',
    borderColor: 'border-neon-cyan',
    bgGradient: 'from-neon-cyan/5 to-transparent',
    layerLabel: 'CAPA 02',
  },
  magenta: {
    titleColor: 'text-neon-magenta',
    glowClass: 'glow-magenta',
    boxGlow: 'glow-box-magenta',
    borderColor: 'border-neon-magenta',
    bgGradient: 'from-neon-magenta/5 to-transparent',
    layerLabel: 'CAPA 03',
  },
};

export default function ArticleLayer({ layer, layerIndex, isVisible }: ArticleLayerProps) {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const style = accentStyles[layer.accentColor];

  useEffect(() => {
    if (!isVisible) return;

    // Use requestAnimationFrame for better mobile compatibility
    const raf = requestAnimationFrame(() => {
      setIsInView(true);
    });

    return () => cancelAnimationFrame(raf);
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && sectionRef.current && layerIndex > 0) {
      // Small delay to ensure DOM is rendered on mobile
      const timer = setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, layerIndex]);

  if (!isVisible) return null;

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ scrollMarginTop: '2rem' }}
    >
      {/* Layer divider */}
      <div className={`flex items-center gap-4 mb-8 mt-16 ${layerIndex === 0 ? 'mt-8' : ''}`}>
        <span className={`font-mono-stat text-xs tracking-[0.3em] ${style.titleColor} ${style.glowClass} opacity-70`}>
          {style.layerLabel}
        </span>
        <div className={`flex-1 h-px bg-gradient-to-r ${style.bgGradient}`} />
      </div>

      {/* Layer image */}
      <div className={`relative w-full aspect-video mb-10 rounded-lg overflow-hidden border border-white/5 ${style.boxGlow}`}>
        <img
          src={layer.image}
          alt={layer.title}
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Layer title */}
      <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${style.titleColor} ${style.glowClass} mb-8 leading-tight`}>
        {layer.title}
      </h3>

      {/* Paragraphs */}
      <div className="space-y-6 mb-10">
        {layer.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-300 text-base md:text-lg leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-12 py-8 border-y border-white/5">
        {layer.stats.map((stat, i) => (
          <CountUpStat
            key={i}
            value={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix}
            label={stat.label}
            accentColor={layer.accentColor}
          />
        ))}
      </div>

      {/* Quotes */}
      {layer.quotes.map((quote, i) => (
        <QuoteBlock key={i} text={quote} accentColor={layer.accentColor} />
      ))}
    </div>
  );
}