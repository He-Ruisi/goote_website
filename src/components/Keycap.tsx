import React from 'react';

interface KeycapProps {
  label?: string;
  subLabel?: string;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rotate?: string;
  className?: string;
  badge?: string | number;
  isGradient?: boolean;
  onClick?: () => void;
}

export const Keycap: React.FC<KeycapProps> = ({
  label,
  subLabel,
  icon,
  size = 'md',
  rotate = 'rotate-0',
  className = '',
  badge,
  isGradient = false,
  onClick
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs rounded-xl border-b-4',
    md: 'w-14 h-14 text-sm rounded-2xl border-b-[5px]',
    lg: 'w-20 h-20 text-base rounded-[20px] border-b-[6px]',
    xl: 'w-28 h-24 text-lg rounded-[22px] border-b-[7px]'
  };

  return (
    <div className={`relative inline-block transition-transform duration-200 ${rotate} ${className}`}>
      <button
        type="button"
        onClick={onClick}
        className={`keyviz-keycap ${sizeClasses[size]} p-2 cursor-pointer ${
          isGradient 
            ? 'border-[#2B5F75] shadow-[0_12px_22px_rgba(43,95,117,0.3)] ring-2 ring-[#3B7A57]/60' 
            : 'border-[#808080] bg-[#F0F0F4]'
        }`}
      >
        {/* Subtle inner top highlight */}
        <div className="absolute inset-x-1.5 top-1 h-[2px] bg-white/70 rounded-full pointer-events-none" />

        {subLabel && (
          <span className="text-[10px] font-bold text-[#808080]/80 leading-none mb-0.5">
            {subLabel}
          </span>
        )}

        {icon ? (
          <div className="text-[#808080] font-bold">{icon}</div>
        ) : (
          <span className={`font-extrabold tracking-tight leading-tight ${
            isGradient ? 'text-[#2B5F75]' : 'text-[#808080]'
          }`}>
            {label}
          </span>
        )}
      </button>

      {/* Top-right notification badge */}
      {badge !== undefined && (
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#808080] text-[#F0F0F4] font-mono font-bold text-[10px] flex items-center justify-center shadow-md border border-[#F0F0F4]">
          {badge}
        </span>
      )}
    </div>
  );
};

export const MouseIndicator: React.FC<{ active?: boolean; className?: string }> = ({ 
  active = true, 
  className = '' 
}) => {
  return (
    <div className={`inline-flex flex-col items-center justify-start w-5 h-8 rounded-full border-[2.2px] border-[#808080] bg-[#808080]/20 p-0.5 shadow-sm ${className}`}>
      {/* Scroll wheel in Chinese landscape mineral green (石绿 #3B7A57) */}
      <span className={`w-1 h-2 rounded-full ${active ? 'bg-[#3B7A57] animate-pulse' : 'bg-[#808080]'}`} />
    </div>
  );
};
