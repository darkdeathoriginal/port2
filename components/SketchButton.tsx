import React from 'react';

interface SketchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  isActive?: boolean;
}

export const SketchButton: React.FC<SketchButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isActive = false,
  className = '',
  ...props 
}) => {
  
  const baseStyles = "font-sketch text-2xl tracking-widest px-6 py-2 transition-all duration-300 relative group outline-none";
  
  const variants = {
    primary: `bg-ds-paper text-ds-ink border-2 border-ds-ink hover:bg-ds-red hover:text-white hover:border-white hover:-rotate-1`,
    secondary: `bg-transparent text-ds-paper border-2 border-ds-paper hover:bg-ds-paper hover:text-ds-ink hover:rotate-1`,
    danger: `bg-ds-red text-white border-2 border-white hover:bg-ds-red-dark hover:scale-105`
  };

  const activeStyle = isActive 
    ? "bg-ds-red text-white border-white -rotate-1 scale-105 shadow-[0_0_10px_rgba(138,44,44,0.8)]" 
    : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${activeStyle} ${className}`}
      {...props}
    >
      {/* Sketchy Borders SVG Overlay (Simulated with CSS for simplicity, but adding a pseudo element for messy look) */}
      <span className="absolute top-0 left-0 w-full h-full border-2 border-current opacity-50 pointer-events-none transform rotate-[0.5deg] group-hover:rotate-[-1deg] transition-transform"></span>
      
      {children}
    </button>
  );
};
