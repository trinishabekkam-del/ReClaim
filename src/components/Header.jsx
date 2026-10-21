import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, PlusCircle, Search, ShieldCheck, User } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand with original logo */}
        <Link to="/" className="brand-link" onClick={closeMobileMenu}>
          <img 
            src="/logo.png.jpeg" 
            alt="ReClaim Campus Lost & Found" 
            className="brand-logo"
            onError={(e) => {
              console.error('Logo failed to load at /logo.png.jpeg');
            }}
          />
          <span className="brand-title">ReClaim</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/browse" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Browse Items
          </NavLink>
          <NavLink to="/report-lost" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Report Lost
          </NavLink>
          <NavLink to="/report-found" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Report Found
          </NavLink>
          <NavLink to="/how-it-works" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            How It Works
          </NavLink>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          <Link to="/auth" className="btn btn-outline btn-sm">
            <User size={16} />
            <span>Sign In</span>
          </Link>
          <Link to="/report-lost" className="btn btn-primary btn-sm">
            <PlusCircle size={16} />
            <span>Report Item</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <NavLink to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </NavLink>
          <NavLink to="/browse" className="mobile-nav-link" onClick={closeMobileMenu}>
            Browse Items
          </NavLink>
          <NavLink to="/report-lost" className="mobile-nav-link" onClick={closeMobileMenu}>
            Report Lost Item
          </NavLink>
          <NavLink to="/report-found" className="mobile-nav-link" onClick={closeMobileMenu}>
            Report Found Item
          </NavLink>
          <NavLink to="/how-it-works" className="mobile-nav-link" onClick={closeMobileMenu}>
            How It Works & Safety
          </NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact & Feedback
          </NavLink>
          <NavLink to="/auth" className="mobile-nav-link" onClick={closeMobileMenu}>
            Sign In / Register (Demo)
          </NavLink>
        </div>
      )}
    </header>
  );
};
