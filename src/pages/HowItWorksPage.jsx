import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck, Search, Users, AlertTriangle, Building2, Lock, ArrowRight } from 'lucide-react';

export const HowItWorksPage = () => {
  return (
    <div className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
          <h1 className="section-title">How ReClaim Works</h1>
          <p className="section-subtitle">
            A simple, secure, and community-focused process for recovering lost items on campus.
          </p>
        </div>

        {/* 3 Step Detail Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          <div className="action-card">
            <div className="step-number" style={{ margin: 0, marginBottom: '1rem' }}>1</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.5rem' }}>
              Report Lost or Found
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
              Fill out a quick report detailing the item name, category, date, and location. Photos can be included to assist visual identification.
            </p>
            <ul style={{ fontSize: '0.85rem', color: '#64748B', listStyle: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>Categorize accurately (Keys, Bags, IDs)</li>
              <li>Specify exact campus location</li>
              <li>Omit sensitive phone numbers</li>
            </ul>
          </div>

          <div className="action-card">
            <div className="step-number" style={{ margin: 0, marginBottom: '1rem', backgroundColor: '#0084B4' }}>2</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.5rem' }}>
              Browse & Match
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
              Search active campus listings using filters for location, category, and date. Search updates instantly to display possible matches.
            </p>
            <ul style={{ fontSize: '0.85rem', color: '#64748B', listStyle: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>Filter by Lost or Found status</li>
              <li>Search specific building names</li>
              <li>Sort by date reported</li>
            </ul>
          </div>

          <div className="action-card">
            <div className="step-number" style={{ margin: 0, marginBottom: '1rem', backgroundColor: '#00B47D' }}>3</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.5rem' }}>
              Verify & Reconnect
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
              Owners initiate a claim by providing unique verification marks (key counts, folder subjects, serial numbers). Reclaim safely via Campus Security.
            </p>
            <ul style={{ fontSize: '0.85rem', color: '#64748B', listStyle: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>Verification details reviewed securely</li>
              <li>Pickup at official security desk</li>
              <li>Student ID required for collection</li>
            </ul>
          </div>
        </div>

        {/* Safety & Best Practices Grid */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '16px',
          padding: '3rem 2.5rem',
          boxShadow: '0 4px 12px -2px rgba(15, 23, 42, 0.08)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#00B47D',
              fontWeight: 600,
              fontSize: '0.875rem',
              backgroundColor: '#E6F7F0',
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              marginBottom: '0.75rem'
            }}>
              <ShieldCheck size={16} />
              <span>Safety Protocol</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0F2C59' }}>
              Campus Safety & Responsible Recovery Guidelines
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: 42, height: 42, borderRadius: '8px', backgroundColor: '#EFF6FF', color: '#1E40AF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Lock size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.35rem' }}>
                  No Public Contact Details
                </h4>
                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5 }}>
                  Do not post phone numbers, personal home addresses, or social security numbers on public item cards. Communication happens through designated campus offices.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: 42, height: 42, borderRadius: '8px', backgroundColor: '#E6F7F0', color: '#00B47D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Building2 size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.35rem' }}>
                  Campus Security Drop-Off
                </h4>
                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5 }}>
                  Valuable items such as laptops, student IDs, bank cards, and wallets should be deposited immediately at the nearest Campus Security Desk.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: 42, height: 42, borderRadius: '8px', backgroundColor: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FileCheck size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.35rem' }}>
                  Ownership Proof Verification
                </h4>
                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5 }}>
                  Before handing over any found item, security personnel verify matching key charms, serial numbers, password unlocks, or notebook title pages.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: 42, height: 42, borderRadius: '8px', backgroundColor: '#F1F5F9', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <AlertTriangle size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.35rem' }}>
                  Demonstration Notice
                </h4>
                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5 }}>
                  This web app is a student project demonstration. In production, it connects with the university student portal for authenticated campus access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          backgroundColor: '#0F2C59',
          color: '#ffffff',
          padding: '2.5rem',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>
            Ready to Search or Report?
          </h3>
          <p style={{ color: '#CBD5E1', maxWidth: '500px', fontSize: '0.975rem' }}>
            Help your fellow students reconnect with what matters.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <Link to="/report-lost" className="btn btn-primary">
              Report Lost Item
            </Link>
            <Link to="/browse" className="btn btn-outline" style={{ color: '#ffffff', borderColor: '#475569' }}>
              Browse Found Items
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
