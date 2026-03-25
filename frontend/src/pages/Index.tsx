import { useState, useEffect, useRef } from 'react';
import { articles } from '@/data/articles';
import ArticleLayer from '@/components/ArticleLayer';
import { useReadCounts } from '@/hooks/useReadCounts';

export default function Index() {
  const [hasEntered, setHasEntered] = useState(false);
  const [visibleLayers, setVisibleLayers] = useState<number>(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showArticleList, setShowArticleList] = useState(false);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const hasTrackedRef = useRef<Set<string>>(new Set());

  const { readCounts, incrementRead } = useReadCounts();

  const article = articles[currentArticleIndex];

  const selectArticle = (index: number) => {
    setCurrentArticleIndex(index);
    setVisibleLayers(1);
    setShowArticleList(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Track read when selecting from list
    const selectedArticle = articles[index];
    if (!hasTrackedRef.current.has(selectedArticle.id)) {
      hasTrackedRef.current.add(selectedArticle.id);
      incrementRead(selectedArticle.id);
    }
  };

  // Particle effect for hero
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    setVisibleLayers(1);
    // Track read for the first article
    const firstArticle = articles[currentArticleIndex];
    if (!hasTrackedRef.current.has(firstArticle.id)) {
      hasTrackedRef.current.add(firstArticle.id);
      incrementRead(firstArticle.id);
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleShowInvestigaciones = () => {
    setShowArticleList((prev) => !prev);
  };

  const revealNextLayer = () => {
    if (visibleLayers < 3) {
      setVisibleLayers((prev) => prev + 1);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const layerButtonColors = {
    1: 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]',
    2: 'border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 hover:shadow-[0_0_30px_rgba(255,0,110,0.2)]',
  };

  // Entry screen
  if (!hasEntered) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden px-4 py-16">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-neon-green/30 animate-flicker"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${3 + p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px]" />
        </div>

        {/* Hero image - Metallic glasses with data reflections */}
        <div className="relative w-64 h-40 md:w-96 md:h-56 mb-12 group">
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/f8d4d9a4-a0dc-4bee-be42-be2b8ff71cf3.png"
            alt="Gafas metálicas con datos reflejados"
            className="w-full h-full object-cover rounded-lg"
            style={{ filter: 'brightness(1.1) contrast(1.2) saturate(1.1)' }}
          />
          {/* Animated data scan overlay */}
          <div
            className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.08) 2px, rgba(0,255,136,0.08) 4px)',
                animation: 'scanlines 3s linear infinite',
              }}
            />
            <div
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-neon-green/60 to-transparent"
              style={{ animation: 'scanBeam 2.5s ease-in-out infinite' }}
            />
          </div>
          <div className="absolute -inset-1 rounded-lg border border-neon-green/20 animate-glow-pulse pointer-events-none" />
          <div className="absolute -inset-2 rounded-xl bg-neon-green/5 blur-xl animate-glow-pulse pointer-events-none" />
        </div>

        {/* Brand */}
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="font-mono-stat text-xs md:text-sm tracking-[0.4em] text-neon-green/60 mb-6 uppercase">
            Lo que no ves
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-8">
            Estás generando datos{' '}
            <span className="text-neon-green glow-green font-medium">ahora mismo</span>.
            <br />
            Esto es lo que revelan.
          </p>

          {/* Illuminated quote */}
          <div
            className="relative mb-12 py-10 px-6 md:px-8 max-w-xl mx-auto rounded-xl border border-neon-green/20 animate-glow-pulse pointer-events-none select-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,255,136,0.08) 0%, rgba(0,255,136,0.03) 40%, rgba(10,10,10,0.9) 80%)',
              boxShadow: '0 0 30px rgba(0,255,136,0.15), 0 0 60px rgba(0,255,136,0.08), 0 0 100px rgba(0,255,136,0.04), inset 0 0 40px rgba(0,255,136,0.05)',
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.7), transparent)', boxShadow: '0 0 10px rgba(0,255,136,0.5), 0 0 20px rgba(0,255,136,0.3)' }}
            />
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.7), transparent)', boxShadow: '0 0 10px rgba(0,255,136,0.5), 0 0 20px rgba(0,255,136,0.3)' }}
            />
            <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-neon-green/40" style={{ boxShadow: '0 0 8px rgba(0,255,136,0.6), 0 0 16px rgba(0,255,136,0.3)' }} />
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-neon-green/40" style={{ boxShadow: '0 0 8px rgba(0,255,136,0.6), 0 0 16px rgba(0,255,136,0.3)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-neon-green/40" style={{ boxShadow: '0 0 8px rgba(0,255,136,0.6), 0 0 16px rgba(0,255,136,0.3)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-neon-green/40" style={{ boxShadow: '0 0 8px rgba(0,255,136,0.6), 0 0 16px rgba(0,255,136,0.3)' }} />
            <p
              className="relative text-[13px] md:text-[15px] leading-[1.9] text-white/80 italic font-light tracking-wide"
              style={{ textShadow: '0 0 8px rgba(255,255,255,0.08)' }}
            >
              <span className="text-neon-green text-3xl leading-none align-top mr-1" style={{ textShadow: '0 0 20px rgba(0,255,136,0.6), 0 0 40px rgba(0,255,136,0.3)' }}>"</span>
              Despertar no es saber más conspiraciones, sino desarrollar{' '}
              <span className="text-white font-semibold not-italic" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(255,255,255,0.15)' }}>
                criterio
              </span>
              : contrastar fuentes, verificar informaciones, entender intereses detrás de cada mensaje y{' '}
              <span className="text-neon-green font-semibold not-italic" style={{ textShadow: '0 0 20px rgba(0,255,136,0.7), 0 0 40px rgba(0,255,136,0.3), 0 0 60px rgba(0,255,136,0.15)' }}>
                no delegar nunca el propio juicio
              </span>
              .
              <span className="text-neon-green text-3xl leading-none align-bottom ml-1" style={{ textShadow: '0 0 20px rgba(0,255,136,0.6), 0 0 40px rgba(0,255,136,0.3)' }}>"</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4" style={{ position: 'relative', zIndex: 50 }}>
            <button
              type="button"
              onClick={() => handleEnter()}
              className="group relative inline-flex items-center gap-3 px-8 py-4 border border-neon-green/50 text-neon-green font-mono-stat text-sm tracking-wider uppercase rounded-sm cursor-pointer select-none active:scale-95 active:bg-neon-green/20 hover:bg-neon-green/10 hover:border-neon-green transition-all duration-300"
              style={{ WebkitTapHighlightColor: 'rgba(0,255,136,0.2)', touchAction: 'manipulation' }}
            >
              <span>Ver lo que no ves</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleShowInvestigaciones()}
              className={`group inline-flex items-center gap-2 px-6 py-4 border font-mono-stat text-sm tracking-wider uppercase rounded-sm cursor-pointer select-none active:scale-95 transition-all duration-300 ${
                showArticleList
                  ? 'border-neon-cyan/60 text-neon-cyan bg-neon-cyan/10'
                  : 'border-neon-cyan/30 text-neon-cyan/80 hover:border-neon-cyan/60 hover:text-neon-cyan hover:bg-neon-cyan/5'
              }`}
              style={{ WebkitTapHighlightColor: 'rgba(0,229,255,0.2)', touchAction: 'manipulation' }}
            >
              <svg className={`w-4 h-4 transition-transform duration-300 ${showArticleList ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <span>Investigaciones</span>
              <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-neon-cyan/10 text-neon-cyan/70 rounded border border-neon-cyan/30">
                {articles.length}
              </span>
            </button>
          </div>

          {/* Dropdown article list on home screen */}
          {showArticleList && (
            <div
              className="mt-6 w-full max-w-xl mx-auto animate-fade-in-up"
              style={{ position: 'relative', zIndex: 50 }}
            >
              <div className="bg-[#111] border border-neon-cyan/20 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.1)]">
                <div className="px-4 py-3 border-b border-white/5">
                  <h4 className="font-mono-stat text-[10px] tracking-[0.2em] text-neon-cyan/50 uppercase">
                    Investigaciones publicadas
                  </h4>
                </div>
                <div className="max-h-[50vh] overflow-y-auto">
                  {articles.map((a, idx) => (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => {
                        setCurrentArticleIndex(idx);
                        setShowArticleList(false);
                        handleEnter();
                      }}
                      className="w-full text-left px-4 py-4 border-b border-white/[0.03] last:border-0 hover:bg-neon-cyan/5 transition-all duration-200 cursor-pointer active:bg-neon-cyan/10"
                      style={{ touchAction: 'manipulation' }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono-stat text-[10px] tracking-wider text-neon-cyan/40 shrink-0 mt-1">
                          #{String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="min-w-0">
                          <h5 className="text-white font-semibold text-sm leading-tight mb-1">{a.title}</h5>
                          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{a.subtitle}</p>
                          <div className="flex items-center gap-2 text-gray-600 text-[10px] mt-2 font-mono-stat flex-wrap">
                            <span>{a.publishedDate}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-700" />
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3 text-neon-green/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-neon-green/40">{readCounts[a.id] ?? 0}</span>
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-neon-cyan/30 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom hint */}
        <div className="mt-12 text-gray-600 text-xs font-mono-stat tracking-wider text-center">
          Una investigación de Lo que no ves
        </div>
      </div>
    );
  }

  // Article view
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-neon-green/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => {
              setHasEntered(false);
              setVisibleLayers(0);
              setShowArticleList(false);
            }}
            className="font-mono-stat text-sm tracking-[0.3em] text-neon-green hover:text-neon-green transition-colors uppercase glow-green flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse" />
            Lo que no ves
          </button>

          <button
            onClick={() => setShowArticleList(!showArticleList)}
            className={`font-mono-stat text-sm tracking-wider transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-sm border ${
              showArticleList
                ? 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/5 glow-cyan'
                : 'text-white/80 border-white/20 hover:text-neon-cyan hover:border-neon-cyan/30 hover:bg-neon-cyan/5'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            Investigaciones
          </button>
        </div>
      </header>

      {/* Article list dropdown */}
      {showArticleList && (
        <div className="bg-surface border-b border-white/5 max-h-[70vh] overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h4 className="font-mono-stat text-xs tracking-[0.2em] text-gray-500 mb-4 uppercase">
              Investigaciones publicadas
            </h4>
            <div className="space-y-3">
              {articles.map((a, idx) => (
                <button
                  key={a.id}
                  onClick={() => selectArticle(idx)}
                  className={`w-full text-left p-4 bg-surface-alt rounded-md border transition-all cursor-pointer ${
                    idx === currentArticleIndex
                      ? 'border-neon-green/40 glow-box-green'
                      : 'border-white/5 hover:border-neon-green/20'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-1">
                    <span className="font-mono-stat text-[10px] tracking-wider text-neon-green/50 shrink-0 mt-1">
                      #{String(idx + 1).padStart(3, '0')}
                    </span>
                    <h5 className="text-white font-semibold text-sm md:text-base">{a.title}</h5>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm ml-10 md:ml-12">{a.subtitle}</p>
                  <div className="flex items-center gap-2 md:gap-3 text-gray-600 text-[10px] md:text-xs mt-2 font-mono-stat ml-10 md:ml-12 flex-wrap">
                    <span>{a.publishedDate}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-neon-green/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-neon-green/50">{readCounts[a.id] ?? 0}</span>
                      <span>lecturas</span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Article content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Article header */}
        <div ref={heroRef} className="mb-12 md:mb-16">
          <span className="font-mono-stat text-xs tracking-[0.3em] text-neon-green/50 uppercase mb-4 block">
            Investigación #{String(currentArticleIndex + 1).padStart(3, '0')}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {article.title}
          </h1>
          <h2 className="text-lg md:text-xl text-gray-400 font-light mb-6">
            {article.subtitle}
          </h2>
          <div className="flex items-center gap-4 text-xs font-mono-stat text-gray-600 flex-wrap">
            <span>{article.publishedDate}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>3 capas</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>
              {Math.max(8, Math.ceil(article.layers.reduce((acc, l) => acc + l.paragraphs.join(' ').length, 0) / 1200))} min lectura
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-neon-green/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-neon-green/60">{readCounts[article.id] ?? 0}</span>
              <span>lecturas</span>
            </span>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-700 ${
                  i < visibleLayers
                    ? i === 0
                      ? 'bg-neon-green'
                      : i === 1
                        ? 'bg-neon-cyan'
                        : 'bg-neon-magenta'
                    : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Layers */}
        {article.layers.map((layer, index) => (
          <ArticleLayer
            key={index}
            layer={layer}
            layerIndex={index}
            isVisible={index < visibleLayers}
          />
        ))}

        {/* Reveal next layer button */}
        {visibleLayers > 0 && visibleLayers < 3 && (
          <div className="flex justify-center my-16">
            <button
              onClick={revealNextLayer}
              className={`group relative inline-flex items-center gap-3 px-8 py-4 border font-mono-stat text-sm tracking-wider transition-all duration-500 rounded-sm ${
                layerButtonColors[visibleLayers as 1 | 2]
              }`}
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Descubrir la siguiente capa</span>
            </button>
          </div>
        )}

        {/* Closing section */}
        {visibleLayers === 3 && (
          <div className="mt-20 animate-fade-in-up">
            {/* Divider */}
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Closing block */}
            <div className="bg-surface-alt rounded-lg p-8 md:p-12 border border-white/5 relative overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-magenta opacity-50" />

              <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed text-center max-w-3xl mx-auto">
                {article.closingPhrase.split('¿').map((part, i) =>
                  i === 0 ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <span key={i}>
                      <span className="text-neon-green glow-green font-medium">¿{part}</span>
                    </span>
                  )
                )}
              </p>

              {/* References section */}
              {article.references && article.references.length > 0 && (
                <div className="mt-10 pt-8 border-t border-white/5">
                  <details className="group">
                    <summary className="cursor-pointer flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5 text-neon-green/60 transition-transform duration-300 group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                      <span className="font-mono-stat text-xs tracking-[0.2em] uppercase">
                        Fuentes y referencias ({article.references.length})
                      </span>
                    </summary>
                    <div className="mt-6 space-y-3 pl-2">
                      {(() => {
                        // Determine categories based on whether references use the category field
                        const hasCategories = article.references!.some(r => r.category);
                        
                        if (hasCategories) {
                          // Category-based rendering (for articles with category field)
                          const categoryConfig: { key: string; label: string; colorClass: string; numColorClass: string }[] = [
                            // Article 1 categories
                            { key: 'perfilado', label: 'Perfilado conductual', colorClass: 'text-yellow-400/50', numColorClass: 'text-yellow-400/30' },
                            { key: 'vigilancia', label: 'Vigilancia estatal', colorClass: 'text-red-400/50', numColorClass: 'text-red-400/30' },
                            { key: 'espana', label: 'España / Europa', colorClass: 'text-neon-magenta/50', numColorClass: 'text-neon-magenta/30' },
                            { key: 'brokers', label: 'Data brokers', colorClass: 'text-orange-400/50', numColorClass: 'text-orange-400/30' },
                            { key: 'filosofia', label: 'Marco filosófico / Legal', colorClass: 'text-neon-cyan/50', numColorClass: 'text-neon-cyan/30' },
                            { key: 'historico', label: 'Histórico', colorClass: 'text-neon-green/50', numColorClass: 'text-neon-green/30' },
                            // Article 2 categories
                            { key: 'neurociencia', label: 'Neurociencia y psicología del pago', colorClass: 'text-purple-400/50', numColorClass: 'text-purple-400/30' },
                            { key: 'infraestructura', label: 'Infraestructura de pagos', colorClass: 'text-neon-cyan/50', numColorClass: 'text-neon-cyan/30' },
                            { key: 'datos_comercio', label: 'Datos y comercialización', colorClass: 'text-yellow-400/50', numColorClass: 'text-yellow-400/30' },
                            { key: 'vigilancia_fin', label: 'Vigilancia financiera', colorClass: 'text-red-400/50', numColorClass: 'text-red-400/30' },
                            { key: 'geopolitica', label: 'Geopolítica y arma financiera', colorClass: 'text-orange-400/50', numColorClass: 'text-orange-400/30' },
                            { key: 'alternativas', label: 'Efectivo y alternativas', colorClass: 'text-neon-green/50', numColorClass: 'text-neon-green/30' },
                          ];
                          
                          return categoryConfig.map(cat => {
                            const refs = article.references!.filter(r => r.category === cat.key);
                            if (refs.length === 0) return null;
                            return (
                              <div key={cat.key} className="mb-6">
                                <h5 className={`font-mono-stat text-[10px] tracking-[0.25em] ${cat.colorClass} uppercase mb-3`}>
                                  {cat.label} ({refs.length})
                                </h5>
                                <div className="space-y-2">
                                  {refs.map((ref) => (
                                    <div key={ref.id} className="flex gap-3 py-2 border-b border-white/[0.03] last:border-0">
                                      <span className={`font-mono-stat text-[10px] ${cat.numColorClass} mt-0.5 shrink-0 w-6 text-right`}>[{String(ref.id).padStart(2, '0')}]</span>
                                      <div className="min-w-0">
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                          <span className="text-white/80 font-medium">{ref.author}</span>
                                          {' — '}
                                          <span className="italic text-gray-400">{ref.title}</span>
                                          {' · '}
                                          <span className="text-gray-500">{ref.source}</span>
                                          {' · '}
                                          <span className="font-mono-stat text-xs text-gray-600">{ref.year}</span>
                                        </p>
                                        {ref.quote && (
                                          <p className="text-gray-500 text-xs mt-1 leading-relaxed italic">{ref.quote}</p>
                                        )}
                                        {ref.detail && !ref.quote && (
                                          <p className="text-gray-600 text-xs mt-1 leading-relaxed">{ref.detail}</p>
                                        )}
                                        {ref.url && (
                                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-neon-cyan/40 hover:text-neon-cyan/70 text-[10px] font-mono-stat mt-1 block transition-colors truncate">
                                            {ref.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          });
                        } else {
                          // ID-range based rendering (for Cantillón article without category field)
                          const sections = [
                            { filter: (r: { id: number }) => r.id <= 5, label: 'Fuentes primarias y obras originales', colorClass: 'text-neon-green/40', numColorClass: 'text-neon-green/30' },
                            { filter: (r: { id: number }) => r.id >= 6 && r.id <= 10, label: 'Fuentes académicas y de investigación', colorClass: 'text-neon-cyan/40', numColorClass: 'text-neon-cyan/30' },
                            { filter: (r: { id: number }) => r.id >= 11 && r.id <= 17, label: 'Fuentes de divulgación económica', colorClass: 'text-gray-500', numColorClass: 'text-gray-600' },
                            { filter: (r: { id: number }) => r.id >= 18, label: 'Aplicación moderna: QE, deuda pública y desigualdad', colorClass: 'text-neon-magenta/40', numColorClass: 'text-neon-magenta/30' },
                          ];
                          
                          return sections.map((section, idx) => {
                            const refs = article.references!.filter(section.filter);
                            if (refs.length === 0) return null;
                            return (
                              <div key={idx} className="mb-6">
                                <h5 className={`font-mono-stat text-[10px] tracking-[0.25em] ${section.colorClass} uppercase mb-3`}>
                                  {section.label}
                                </h5>
                                <div className="space-y-2">
                                  {refs.map((ref) => (
                                    <div key={ref.id} className="flex gap-3 py-2 border-b border-white/[0.03] last:border-0">
                                      <span className={`font-mono-stat text-[10px] ${section.numColorClass} mt-0.5 shrink-0 w-6 text-right`}>[{ref.id}]</span>
                                      <div className="min-w-0">
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                          <span className="text-white/80 font-medium">{ref.author}</span>
                                          {' — '}
                                          <span className="italic text-gray-400">{ref.title}</span>
                                          {' · '}
                                          <span className="text-gray-500">{ref.source}</span>
                                          {' · '}
                                          <span className="font-mono-stat text-xs text-gray-600">{ref.year}</span>
                                        </p>
                                        {ref.detail && (
                                          <p className="text-gray-600 text-xs mt-1 leading-relaxed">{ref.detail}</p>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          });
                        }
                      })()}
                      <p className="text-gray-700 text-[10px] font-mono-stat mt-4 pt-4 border-t border-white/[0.03]">
                        Tabla elaborada a partir de las fuentes consultadas. Todas las URLs verificadas en marzo de 2026.
                      </p>
                    </div>
                  </details>
                </div>
              )}

              {/* Share buttons */}
              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-center text-gray-500 text-xs font-mono-stat tracking-[0.2em] uppercase mb-5">
                  Comparte esta investigación
                </p>
                <div className="relative flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                  {/* Twitter/X */}
                  <a
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent(`"${article.closingPhrase}"\n\n— ${article.title} · Lo que no ves`)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg bg-white/[0.02] hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    title="Compartir en X"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="text-gray-400 group-hover:text-white text-xs font-mono-stat tracking-wider transition-colors">X (Twitter)</span>
                  </a>

                  {/* Telegram */}
                  <a
                    href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`"${article.closingPhrase}"\n\n— ${article.title} · Lo que no ves`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg bg-white/[0.02] hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300"
                    title="Compartir en Telegram"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-neon-cyan transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    <span className="text-gray-400 group-hover:text-neon-cyan text-xs font-mono-stat tracking-wider transition-colors">Telegram</span>
                  </a>

                  {/* Nostr */}
                  <button
                    onClick={() => {
                      const nostrText = `"${article.closingPhrase}"\n\n— ${article.title} · Lo que no ves\n\n${window.location.href}`;
                      navigator.clipboard.writeText(nostrText);
                      const nostrUrl = `https://snort.social/`;
                      window.open(nostrUrl, '_blank', 'noopener,noreferrer');
                      const el = document.getElementById('nostr-confirm');
                      if (el) {
                        el.classList.remove('opacity-0');
                        el.classList.add('opacity-100');
                        setTimeout(() => {
                          el.classList.remove('opacity-100');
                          el.classList.add('opacity-0');
                        }, 3000);
                      }
                    }}
                    className="group flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg bg-white/[0.02] hover:border-neon-magenta/30 hover:bg-neon-magenta/5 transition-all duration-300"
                    title="Compartir en Nostr (se copia el texto al portapapeles)"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-neon-magenta transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.981 2.002c-1.27.007-2.607.213-3.97.636C4.753 4.082 1.57 8.617 2.122 13.108c.336 2.737 1.75 4.998 3.839 6.42 1.35.92 2.9 1.44 4.51 1.47h.19c2.25-.04 4.34-1.05 5.89-2.85 1.27-1.47 2.05-3.32 2.2-5.22.21-2.64-.73-5.14-2.58-6.87-1.27-1.19-2.85-1.93-4.56-2.02a7.3 7.3 0 0 0-.63-.017zm-.15 2.008c.16.003.33.01.5.03 1.23.07 2.41.62 3.37 1.52 1.41 1.32 2.12 3.22 1.96 5.22-.12 1.47-.72 2.88-1.69 3.99-1.19 1.38-2.84 2.16-4.53 2.19h-.15c-1.22-.03-2.38-.42-3.42-1.13-1.6-1.09-2.69-2.83-2.95-4.93-.42-3.42 2.01-6.88 5.43-8.01 1.02-.34 2.01-.5 2.98-.49l-.5.54z" />
                    </svg>
                    <span className="text-gray-400 group-hover:text-neon-magenta text-xs font-mono-stat tracking-wider transition-colors">Nostr</span>
                  </button>
                  <span id="nostr-confirm" className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-neon-magenta text-[10px] font-mono-stat opacity-0 transition-opacity duration-300 whitespace-nowrap">
                    Texto copiado — pégalo en tu cliente Nostr
                  </span>
                </div>
              </div>

              {/* Subscription */}
              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-center text-gray-400 text-sm mb-6 font-mono-stat tracking-wider">
                  Recibe la siguiente investigación antes de que se publique.
                </p>

                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      required
                      className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-sm px-4 py-3 text-white text-sm font-mono-stat placeholder:text-gray-600 focus:outline-none focus:border-neon-green/50 focus:shadow-[0_0_20px_rgba(0,255,136,0.1)] transition-all"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-neon-green/10 border border-neon-green/50 text-neon-green font-mono-stat text-sm tracking-wider rounded-sm hover:bg-neon-green/20 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-all"
                    >
                      Suscribirse
                    </button>
                  </form>
                ) : (
                  <div className="text-center">
                    <p className="text-neon-green font-mono-stat text-sm glow-green">
                      ✓ Te avisaremos cuando publiquemos la siguiente investigación.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Donation CTA */}
            <div className="mt-16 relative">
              {/* Magical glow background */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-amber-500/5 via-orange-500/10 to-amber-500/5 blur-xl animate-glow-pulse" />
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-amber-500/5 via-orange-400/5 to-amber-500/5 blur-md" />
              
              <div className="relative bg-gradient-to-b from-[#0f0e09] to-[#0a0a08] rounded-xl p-8 md:p-12 border border-amber-500/20 overflow-hidden">
                {/* Animated sparkles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full animate-flicker"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        width: `${2 + Math.random() * 3}px`,
                        height: `${2 + Math.random() * 3}px`,
                        background: `radial-gradient(circle, ${['#f59e0b', '#fb923c', '#fbbf24', '#f97316'][i % 4]}, transparent)`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${2 + Math.random() * 3}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

                {/* Lightning bolt icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl animate-glow-pulse" />
                    <svg className="relative w-12 h-12 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">
                  <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                    Esta investigación es libre.
                  </span>
                </h3>
                <h4 className="text-lg md:text-xl text-center text-amber-200/80 font-light mb-2">
                  Tú decides su valor.
                </h4>
                <p className="text-center text-amber-100/40 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                  Sin anuncios. Sin patrocinadores. Sin algoritmos que decidan qué lees. 
                  Si esta investigación te abrió los ojos, ayúdanos a seguir encendiendo luces 
                  donde otros prefieren oscuridad.
                </p>

                {/* QR Code */}
                <div className="flex flex-col items-center gap-6 mb-8">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-amber-500/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-white rounded-xl p-3 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                      <img
                        src="/assets/qr-donate-bitcoin.jpg"
                        alt="QR para donar Bitcoin/Sats"
                        className="w-48 h-48 md:w-56 md:h-56 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Lightning address */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-mono-stat text-[10px] tracking-[0.2em] text-amber-500/50 uppercase">
                      Lightning Address
                    </span>
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-amber-500/5 border border-amber-500/20 rounded-lg group hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText('Tomyy@coinos.io');
                        const el = document.getElementById('copy-confirm');
                        if (el) {
                          el.classList.remove('opacity-0');
                          el.classList.add('opacity-100');
                          setTimeout(() => {
                            el.classList.remove('opacity-100');
                            el.classList.add('opacity-0');
                          }, 2000);
                        }
                      }}
                    >
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                      <span className="text-amber-300 font-mono-stat text-sm tracking-wider">
                        Tomyy@coinos.io
                      </span>
                      <svg className="w-4 h-4 text-amber-500/50 group-hover:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                      </svg>
                    </div>
                    <span id="copy-confirm" className="text-amber-400 text-xs font-mono-stat opacity-0 transition-opacity duration-300">
                      ✓ Copiado al portapapeles
                    </span>
                  </div>
                </div>

                {/* Motivational message */}
                <div className="text-center space-y-3">
                  <p className="text-amber-200/60 text-sm italic">
                    "Cada sat es un voto por la verdad sin intermediarios."
                  </p>
                  <div className="flex items-center justify-center gap-4 text-amber-500/30 text-xs font-mono-stat">
                    <span>₿</span>
                    <span className="w-8 h-px bg-amber-500/20" />
                    <span>Soberanía financiera</span>
                    <span className="w-8 h-px bg-amber-500/20" />
                    <span>₿</span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 pb-8 text-center">
              <p className="font-mono-stat text-xs tracking-[0.3em] text-gray-600 uppercase">
                Lo que no ves © 2026
              </p>
              <p className="text-gray-700 text-xs mt-2">
                Investigaciones sobre las arquitecturas ocultas de poder, vigilancia y control.
              </p>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}