import React, { useState } from 'react';
import { X, MapPin, Calendar, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Package } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { useItems } from '../context/ItemContext';

export const ItemDetailsModal = ({ item, onClose }) => {
  const { showToast } = useItems();
  const [claimStep, setClaimStep] = useState('view'); // 'view' | 'form' | 'success'
  const [claimText, setClaimText] = useState('');
  const [studentIdInput, setStudentIdInput] = useState('');
  const [formError, setFormError] = useState('');
  const [imgError, setImgError] = useState(false);

  if (!item) return null;

  const isFound = item.status?.toLowerCase() === 'found';

  const handleStartClaim = () => {
    setClaimStep('form');
  };

  const handleSubmitClaim = (e) => {
    e.preventDefault();
    if (!claimText.trim()) {
      setFormError('Please provide a brief verification description.');
      return;
    }
    setFormError('');
    setClaimStep('success');
    showToast('Claim verification request submitted! Campus Office notified.', 'success');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {claimStep === 'view' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <StatusBadge status={item.status} />
              <span style={{ fontSize: '0.825rem', color: '#64748B', fontStyle: 'italic' }}>
                Ref ID: {item.id} (Sample Demo Record)
              </span>
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F2C59', marginBottom: '1rem' }}>
              {item.name}
            </h2>

            {item.image && !imgError ? (
              <div style={{ 
                borderRadius: '10px', 
                overflow: 'hidden', 
                marginBottom: '1.25rem',
                maxHeight: '280px',
                backgroundColor: '#F1F5F9'
              }}>
                <img 
                  src={item.image} 
                  alt={item.alt || item.name} 
                  onError={() => setImgError(true)}
                  style={{ width: '100%', height: '280px', objectFit: 'cover' }} 
                />
              </div>
            ) : (
              <div style={{
                borderRadius: '10px',
                marginBottom: '1.25rem',
                height: '160px',
                backgroundColor: '#F1F5F9',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B',
                gap: '0.5rem',
                border: '1px solid #E2E8F0'
              }}>
                <Package size={40} />
                <span style={{ fontSize: '0.85rem' }}>{item.category} — {item.name}</span>
              </div>
            )}

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1rem', 
              padding: '1rem', 
              backgroundColor: '#F8FAFC', 
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              marginBottom: '1.25rem'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>
                  Category
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0F172A' }}>
                  {item.category}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>
                  Location
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={14} style={{ color: '#00B47D' }} />
                  {item.location}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>
                  Report Date
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Calendar size={14} style={{ color: '#64748B' }} />
                  {item.date}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>
                  Verification
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#00B47D' }}>
                  Campus Security Verified
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.925rem', fontWeight: 600, color: '#0F2C59', marginBottom: '0.4rem' }}>
                Item Description
              </h4>
              <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>

            {/* Safe Next Steps Box */}
            <div style={{
              backgroundColor: '#E6F7F0',
              border: '1px solid #A3E6CD',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#065F46', fontWeight: 600, marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                <ShieldCheck size={18} />
                <span>Safe Handling & Next Steps</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#047857', lineHeight: 1.5 }}>
                {item.safeNotes || 'Visit the campus information office or security desk to claim this item safely.'}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button className="btn btn-outline btn-sm" onClick={onClose}>
                Close
              </button>

              <button className="btn btn-primary btn-sm" onClick={handleStartClaim}>
                {isFound ? 'I Think This Is Mine' : 'I Found Something Similar'}
              </button>
            </div>
          </div>
        )}

        {claimStep === 'form' && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.5rem' }}>
              {isFound ? 'Submit Ownership Claim' : 'Report Matching Found Item'}
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.25rem' }}>
              To ensure safety, please provide distinctive details that only the true owner or finder would know (e.g. keychain markings, unique scratches, folder contents).
            </p>

            <form onSubmit={handleSubmitClaim}>
              <div className="form-group">
                <label className="form-label">
                  Verification Detail / Distinctive Marks <span className="required">*</span>
                </label>
                <textarea 
                  rows={3} 
                  className="form-control form-control-no-icon"
                  placeholder="Describe unique marks, serial numbers, keychain charms, or specific contents..."
                  value={claimText}
                  onChange={(e) => setClaimText(e.target.value)}
                />
                {formError && <span className="form-error">{formError}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Campus Student/Staff ID (Optional Demo Check)</label>
                <input 
                  type="text" 
                  className="form-control form-control-no-icon" 
                  placeholder="e.g. STU-2026-8819"
                  value={studentIdInput}
                  onChange={(e) => setStudentIdInput(e.target.value)}
                />
                <span className="form-hint">Your ID is used only by campus security to verify identity.</span>
              </div>

              <div style={{ 
                backgroundColor: '#EFF6FF', 
                border: '1px solid #BFDBFE', 
                padding: '0.75rem', 
                borderRadius: '6px', 
                marginBottom: '1.25rem',
                fontSize: '0.8rem',
                color: '#1E40AF',
                display: 'flex',
                gap: '0.5rem'
              }}>
                <AlertCircle size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>
                  Demo Workflow Note: In a production environment, this claim routes directly to campus security officers. No public phone numbers are published.
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setClaimStep('view')}>
                  Back
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  Submit Claim Verification
                </button>
              </div>
            </form>
          </div>
        )}

        {claimStep === 'success' && (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ 
              width: 56, 
              height: 56, 
              borderRadius: '50%', 
              backgroundColor: '#E6F7F0', 
              color: '#00B47D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.5rem' }}>
              Claim Verification Submitted!
            </h3>

            <p style={{ fontSize: '0.925rem', color: '#475569', marginBottom: '1.25rem', maxWidth: '440px', margin: '0 auto 1.5rem' }}>
              Your verification details have been recorded for this demonstration. Next step: Visit the <strong>{item.location} Security Desk</strong> with your Student ID card to retrieve your item.
            </p>

            <button className="btn btn-primary btn-sm" onClick={onClose}>
              Done & Return to Browse
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
