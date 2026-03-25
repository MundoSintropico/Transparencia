interface QuoteBlockProps {
  text: string;
  accentColor: 'green' | 'cyan' | 'magenta';
}

const quoteClasses = {
  green: 'quote-block',
  cyan: 'quote-block-cyan',
  magenta: 'quote-block-magenta',
};

export default function QuoteBlock({ text, accentColor }: QuoteBlockProps) {
  return (
    <blockquote className={`${quoteClasses[accentColor]} rounded-r-md`}>
      <p className="font-mono-stat text-sm md:text-base text-gray-200 italic leading-relaxed">
        "{text}"
      </p>
    </blockquote>
  );
}