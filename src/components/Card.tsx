import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, hoverable = true, style, ...props }) => {
  const baseStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-card)',
    borderRadius: '20px',
    padding: 'var(--space-md)',
    boxShadow: '0 4px 40px rgba(0,0,0,0.4)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div
      style={{ ...baseStyle, ...style }}
      onMouseOver={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = 'translateY(-4px)';
        }
      }}
      onMouseOut={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};
