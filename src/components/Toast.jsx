import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { useItems } from '../context/ItemContext';

export const Toast = () => {
  const { toast } = useItems();

  if (!toast) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      zIndex: 999,
      backgroundColor: toast.type === 'error' ? '#FEF2F2' : '#0F2C59',
      color: toast.type === 'error' ? '#991B1B' : '#FFFFFF',
      border: toast.type === 'error' ? '1px solid #FCA5A5' : '1px solid #00B47D',
      padding: '0.85rem 1.25rem',
      borderRadius: '8px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '0.9rem',
      maxWidth: '400px',
      animation: 'slideUp 0.2s ease-out'
    }}>
      <CheckCircle2 size={18} style={{ color: '#00B47D', flexShrink: 0 }} />
      <span>{toast.message}</span>
    </div>
  );
};
