import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-primary)',
    padding: 'var(--space-lg) 0',
    borderTop: '1px solid var(--divider)',
    color: 'var(--text-secondary)',
    fontSize: '12px',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--space-md)',
  };

  const linkContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--space-md)',
  };

  return (
    <footer style={footerStyle}>
      <div className="container footer-container" style={containerStyle}>
        <div>
          <span style={{ color: 'var(--white)', fontWeight: 600, fontSize: '14px' }}>Kishan</span>
        </div>
        <div className="footer-links" style={linkContainerStyle}>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/experience" className="nav-link">Experience</NavLink>
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>
        <div>
          Built with React & ❤️
        </div>
      </div>
    </footer>
  );
};
