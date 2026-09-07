import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, style, ...props }) => {
  const baseStyle: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '980px',
    fontSize: '17px',
    fontWeight: 400,
    transition: 'all 0.25s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  const primaryStyle: React.CSSProperties = {
    ...baseStyle,
    backgroundColor: 'var(--accent)',
    color: 'var(--white)',
    border: 'none',
  };

  const ghostStyle: React.CSSProperties = {
    ...baseStyle,
    backgroundColor: 'transparent',
    color: 'var(--accent)',
    border: '1px solid var(--accent)',
  };

  const currentStyle = variant === 'ghost' ? ghostStyle : primaryStyle;

  return (
    <button
      style={{ ...currentStyle, ...style }}
      onMouseOver={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
        } else {
          e.currentTarget.style.backgroundColor = 'rgba(41, 151, 255, 0.1)';
        }
      }}
      onMouseOut={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = 'var(--accent)';
        } else {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
