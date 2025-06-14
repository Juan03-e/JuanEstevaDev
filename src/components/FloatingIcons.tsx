
import { useEffect, useState } from 'react';

const symbols = ['{}', '</>', '()', '=>', 'CSS', 'JS', 'TS', 'React', 'C#', '.NET', 'SQL', 'PHP', 'const', 'let'];

interface FloatingSymbol {
  id: number;
  content: string;
  style: React.CSSProperties;
}

const FloatingIcons = () => {
  const [floatingSymbols, setFloatingSymbols] = useState<FloatingSymbol[]>([]);

  useEffect(() => {
    const generateSymbols = () => {
      const newSymbols: FloatingSymbol[] = [];
      const count = 30;
      for (let i = 0; i < count; i++) {
        newSymbols.push({
          id: i,
          content: symbols[Math.floor(Math.random() * symbols.length)],
          style: {
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1.25 + 0.5}rem`, // 0.5rem to 1.75rem
            opacity: Math.random() * 0.15 + 0.05, // 0.05 to 0.2
            animationName: 'float',
            animationDuration: `${Math.random() * 10 + 8}s`, // 8s to 18s
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: `${Math.random() * 8}s`,
            color: 'hsl(var(--foreground))',
            userSelect: 'none',
          },
        });
      }
      setFloatingSymbols(newSymbols);
    };

    generateSymbols();
    window.addEventListener('resize', generateSymbols);
    return () => window.removeEventListener('resize', generateSymbols);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      {floatingSymbols.map(symbol => (
        <span key={symbol.id} style={symbol.style} className="font-mono">
          {symbol.content}
        </span>
      ))}
    </div>
  );
};

export default FloatingIcons;
