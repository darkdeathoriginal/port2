import React from 'react';

interface StatMeterProps {
  label: string;
  value: number;
  max: number;
  color?: string;
}

export const StatMeter: React.FC<StatMeterProps> = ({ label, value, max, color = '#8a2c2c' }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="flex items-center gap-3 w-full mb-3">
      <div className="w-12 h-12 rounded-full border-2 border-ds-paper flex items-center justify-center bg-ds-dark relative overflow-hidden shrink-0">
         {/* Icon placeholder */}
         <span className="text-ds-paper font-sketch text-xl z-10 relative">{label[0]}</span>
         {/* Liquid fill animation */}
         <div 
            className="absolute bottom-0 left-0 w-full bg-opacity-80 transition-all duration-1000"
            style={{ 
              height: `${percentage}%`, 
              backgroundColor: color,
            }}
         ></div>
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between mb-1">
            <span className="font-sketch text-2xl text-ds-paper">{label}</span>
            <span className="font-typewriter text-sm text-ds-gray">{value} / {max}</span>
        </div>
        <div className="w-full h-3 bg-ds-ink border border-ds-gray rounded-full relative overflow-hidden">
            <div 
                className="h-full transition-all duration-700 ease-out"
                style={{ 
                    width: `${percentage}%`,
                    backgroundColor: color,
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.2) 5px, rgba(0,0,0,0.2) 10px)' 
                }}
            ></div>
        </div>
      </div>
    </div>
  );
};
