import React from 'react';

interface SketchCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const SketchCard: React.FC<SketchCardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Paper Background */}
      <div className="relative z-10 bg-ds-paper p-6 border-2 border-ds-ink transform transition-transform duration-300 group-hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(26,24,21,0.5)]">
        {/* Inner Border */}
        <div className="absolute inset-1 border border-ds-gray opacity-30 pointer-events-none"></div>
        
        {title && (
          <div className="mb-4 border-b-2 border-ds-ink pb-2">
            <h3 className="font-sketch text-4xl font-bold text-ds-ink">{title}</h3>
          </div>
        )}
        
        <div className="font-typewriter text-ds-ink">
          {children}
        </div>
      </div>

      {/* Messy backing layers for stacking effect */}
      <div className="absolute inset-0 z-0 bg-ds-paper-dark border-2 border-ds-ink transform rotate-2 translate-x-1 translate-y-1"></div>
    </div>
  );
};
