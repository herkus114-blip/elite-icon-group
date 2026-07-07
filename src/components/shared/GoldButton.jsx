import React from 'react';
import { Link } from 'react-router-dom';

export default function GoldButton({ to, children, variant = 'primary', className = '' }) {
  const base = 'inline-block text-xs uppercase tracking-[0.2em] font-sans-body font-medium px-8 py-4 transition-all duration-300';
  const styles = variant === 'primary'
    ? `${base} bg-gold text-[#0A1628] hover:bg-[#B8953D] ${className}`
    : `${base} border border-gold/40 text-gold hover:bg-gold/10 ${className}`;

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
}