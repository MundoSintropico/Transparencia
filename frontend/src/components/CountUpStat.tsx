import { useCountUp } from '@/hooks/useCountUp';

interface CountUpStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  accentColor: 'green' | 'cyan' | 'magenta';
}

const colorMap = {
  green: { text: 'text-neon-green', glow: 'glow-green' },
  cyan: { text: 'text-neon-cyan', glow: 'glow-cyan' },
  magenta: { text: 'text-neon-magenta', glow: 'glow-magenta' },
};

export default function CountUpStat({ value, suffix = '', prefix = '', label, accentColor }: CountUpStatProps) {
  const count = useCountUp(value, 2500);
  const colors = colorMap[accentColor];

  return (
    <div className="text-center p-3 md:p-4">
      <div className={`font-mono-stat text-2xl sm:text-3xl md:text-4xl font-bold ${colors.text} ${colors.glow} mb-2 tabular-nums`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 leading-tight max-w-[200px] mx-auto">
        {label}
      </div>
    </div>
  );
}