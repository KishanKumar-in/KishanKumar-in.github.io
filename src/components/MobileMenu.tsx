import React from 'react';
import { NavLink } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; path: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      {links.map((link) => (
        <NavLink 
          key={link.name} 
          to={link.path} 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          onClick={onClose}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};
