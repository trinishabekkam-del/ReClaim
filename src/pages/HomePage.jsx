import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Building2, 
  HelpCircle,
  PlusCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { useItems } from '../context/ItemContext';
import { ItemCard } from '../components/ItemCard';
import { ItemDetailsModal } from '../components/ItemDetailsModal';

export const HomePage = () => {
  const { items } = useItems();
  const [selectedItem, setSelectedItem] = useState(null);

  // Show recent 6 items
  const recentItems = items.slice(0, 6);

  return (
    <div>
      {/* Top Demo Disclaimer Banner */}
      <div className="demo-disclaimer-banner">
        <div className="container demo-disclaimer-content">
          <Sparkles size={14} />
          <span>
            Campus Demonstration Platform — All records are sample data created for project evaluation.
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-tagline">
              Lost something? <span>Let's bring it back.</span>
            </h1>
            <p className="hero-description">
              A simple way to report lost belongings, find reported items, and reconnect with your campus community.
            </p>
            <div className="hero-cta-group">
              <Link to="/report-lost" className="btn btn-primary btn-lg">
                <PlusCircle size={18} />
                <span>Report Lost Item</span>
              </Link>
              <Link to="/browse" className="btn btn-outline btn-lg">
                <Search size={18} />
                <span>Browse Found Items</span>
              </Link>
            </div>
          </div>

          {/* Visual Showcase Montage with Real Object Photos */}
          <div className="hero-visual-container">
            <div className="hero-image-grid">
              <div className="hero-visual-card">
                <img 
                  src="/images/black-keychain.jpg" 
                  alt="Keys & Keychain" 
                />
                <span className="hero-visual-label">Keys & Accessories</span>
              </div>

              <div className="hero-visual-card">
                <img 
                  src="/images/grey-backpack.jpg" 
                  alt="Backpack" 
                />
                <span className="hero-visual-label">Backpacks & Bags</span>
              </div>

              <div className="hero-visual-card">
                <img 
                  src="/images/blue-water-bottle.jpg" 
                  alt="Water Bottle" 
                />
                <span className="hero-visual-label">Water Bottles</span>
              </div>

              <div className="hero-visual-card">
                <img 
                  src="/images/wired-earphones.jpg" 
                  alt="Earphones" 
                />
                <span className="hero-visual-label">Earphones & Tech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2 className="section-title">How Can We Help You Today?</h2>
            <p className="section-subtitle">Select an action below to quickly report or locate items on campus.</p>
          </div>

          <div className="quick-actions-grid">
            <div className="action-card">
              <div className="action-card-icon">
                <FileText size={24} />
              </div>
              <h3 className="action-card-title">1. Report a Lost Item</h3>
              <p className="action-card-desc">
                Tell us what you lost and where you last saw it.
              </p>
              <Link to="/report-lost" className="btn btn-navy btn-sm">
                <span>File Lost Report</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="action-card">
              <div className="action-card-icon" style={{ backgroundColor: '#E0F2FE', color: '#0084B4' }}>
                <PlusCircle size={24} />
              </div>
              <h3 className="action-card-title">2. Report a Found Item</h3>
              <p className="action-card-desc">
                Help someone recover a belonging you found.
              </p>
              <Link to="/report-found" className="btn btn-outline btn-sm">
                <span>Submit Found Record</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="action-card">
              <div className="action-card-icon">
                <Search size={24} />
              </div>
              <h3 className="action-card-title">3. Browse Items</h3>
              <p className="action-card-desc">
                Search reports and check whether your item has been listed.
              </p>
              <Link to="/browse" className="btn btn-primary btn-sm">
                <span>Search Feed</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Reported Items */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="section-title">Recently Reported Items</h2>
              <p className="section-subtitle">
                Browse latest campus reports. Sample data for demonstration.
              </p>
            </div>
            <Link to="/browse" className="btn btn-outline btn-sm">
              <span>Browse All Items</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="items-grid">
            {recentItems.map((item) => (
              <ItemCard 
                key={item.id} 
                item={item} 
                onViewDetails={(selected) => setSelectedItem(selected)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* How ReClaim Works */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2 className="section-title">How ReClaim Works</h2>
            <p className="section-subtitle">A straightforward 3-step recovery workflow for campus members.</p>
          </div>

          <div className="how-it-works-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Report</h3>
              <p className="step-desc">
                Submit the details of a lost or found item with location and key descriptions.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Match</h3>
              <p className="step-desc">
                Browse campus reports, search filters, and identify a potential match.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Reconnect</h3>
              <p className="step-desc">
                Verify ownership safely at campus security or the designated office and reclaim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="trust-safety-card">
            <h2 className="trust-title">
              <ShieldCheck size={28} style={{ color: '#00B47D' }} />
              Campus Privacy & Responsible Recovery
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1rem', maxWidth: '640px', lineHeight: 1.6 }}>
              ReClaim is designed with student safety and privacy at its core. We follow simple campus recovery principles:
            </p>

            <div className="trust-grid">
              <div className="trust-item">
                <Lock className="trust-item-icon" size={20} />
                <div className="trust-item-text">
                  <strong>Privacy First:</strong> Personal contact details (phone numbers, emails) are never published publicly on item listings.
                </div>
              </div>

              <div className="trust-item">
                <CheckCircle2 className="trust-item-icon" size={20} />
                <div className="trust-item-text">
                  <strong>Distinctive Verification:</strong> Owners must confirm unique marks, key counts, or serial numbers before claiming items.
                </div>
              </div>

              <div className="trust-item">
                <Building2 className="trust-item-icon" size={20} />
                <div className="trust-item-text">
                  <strong>Valuables & IDs:</strong> Student IDs, wallets, and high-value electronics must be deposited directly at Campus Security.
                </div>
              </div>

              <div className="trust-item">
                <HelpCircle className="trust-item-icon" size={20} />
                <div className="trust-item-text">
                  <strong>Demonstration Scope:</strong> All listings presented are sample data for project evaluation and do not reflect live security logs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {selectedItem && (
        <ItemDetailsModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};
