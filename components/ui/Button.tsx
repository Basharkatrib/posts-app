import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`
        relative overflow-hidden flex items-center justify-center
        transition-all duration-300 active:scale-95
        disabled:opacity-50 disabled:pointer-events-none
        ${className}
      `}
      {...props}
    >
      {/* طبقة لمعان بسيطة عند التحويم (Hover) */}
      <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
      
      <span className="relative z-10">{children}</span>
    </button>
  );
};