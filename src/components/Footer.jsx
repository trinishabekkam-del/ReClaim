import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Info, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img 
                src="/logo.png.jpeg" 
                alt="ReClaim Logo" 
                className="footer-logo" 
              />
              <span className="footer-brand-name">ReClaim</span>
            </div>
            <p className="footer-desc">
              A dedicated campus lost-and-found platform helping college students and staff report missing belongings, find reported items, and safely reconnect.
            </p>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontStyle: 'italic' }}>
              Tagline: "Lost something? Let's bring it back."
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Actions</h4>
            <ul className="footer-links">
              <li><Link to="/browse">Browse Found Items</Link></li>
              <li><Link to="/report-lost">Report a Lost Item</Link></li>
              <li><Link to="/report-found">Report a Found Item</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
            </ul>
          </div>

          {/* Campus Safety */}
          <div>
            <h4 className="footer-heading">Campus Community</h4>
            <ul className="footer-links">
              <li><Link to="/how-it-works">Verification Guidelines</Link></li>
              <li><Link to="/how-it-works#safety">Campus Security Drop-off</Link></li>
              <li><Link to="/contact">Student Feedback</Link></li>
              <li><Link to="/auth">Account Portal (Demo)</Link></li>
            </ul>
          </div>

          {/* Notice & Scope */}
          <div>
            <h4 className="footer-heading">Student Project Notice</h4>
            <p className="footer-desc" style={{ fontSize: '0.85rem' }}>
              ReClaim is created for college project evaluation. All records shown are sample demonstration data. Personal details are protected according to safety guidelines.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} ReClaim — Campus Lost & Found Platform. Developed for College Evaluation.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={16} style={{ color: '#00B47D' }} />
            <span>Campus Privacy & Security First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
