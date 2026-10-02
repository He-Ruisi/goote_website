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
            ? 'border-neutral-900 shadow-[0_12px_20px_rgba(168,85,247,0.25)] ring-2 ring-purple-400/50' 
            : 'border-neutral-900 bg-white'
        }`}
      >
        {/* Subtle inner top highlight */}
        <div className="absolute inset-x-1.5 top-1 h-[2px] bg-white/80 rounded-full pointer-events-none" />

        {subLabel && (
          <span className="text-[10px] font-bold text-neutral-500 leading-none mb-0.5">
            {subLabel}
          </span>
        )}

        {icon ? (
          <div className="text-neutral-900 font-bold">{icon}</div>
        ) : (
          <span className="font-extrabold text-neutral-900 tracking-tight leading-tight">
            {label}
          </span>
        )}
      </button>

      {/* Optional top-right notification count badge like in Screenshot 2 [del with badge 2] */}
      {badge !== undefined && (
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-neutral-400 text-white font-mono font-bold text-[10px] flex items-center justify-center shadow-md">
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
    <div className={`inline-flex flex-col items-center justify-start w-5 h-8 rounded-full border-[2.2px] border-neutral-700 bg-neutral-800 p-0.5 shadow-md ${className}`}>
      {/* Scroll wheel */}
      <span className={`w-1 h-2 rounded-full ${active ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-500'}`} />
    </div>
  );
};
