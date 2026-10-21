import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle2, Upload, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useItems } from '../context/ItemContext';
import { CATEGORIES, LOCATIONS } from '../data/mockItems';

export const ReportLostPage = () => {
  const navigate = useNavigate();
  const { addItem } = useItems();

  const [formData, setFormData] = useState({
    name: '',
    category: 'Accessories',
    location: 'Library',
    date: new Date().toISOString().split('T')[0],
    description: '',
    safeNotes: '',
    imagePreview: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedItem, setSubmittedItem] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, imagePreview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Item name is required.';
    if (!formData.description.trim()) newErrors.description = 'Please provide a detailed description.';
    if (!formData.date) newErrors.date = 'Date lost is required.';
    
    // Date sanity check (cannot be future date)
    if (formData.date) {
      const selected = new Date(formData.date).getTime();
      const now = new Date().getTime();
      if (selected > now + 86400000) { // allow today
        newErrors.date = 'Date lost cannot be in the future.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const created = addItem({
        name: formData.name,
        category: formData.category,
        location: formData.location,
        status: 'Lost',
        date: formData.date,
        description: formData.description,
        image: formData.imagePreview || 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
        safeNotes: formData.safeNotes || 'Verification requires matching unique characteristics or contents.'
      });

      setIsSubmitting(false);
      setSubmittedItem(created);
    }, 600);
  };

  if (submittedItem) {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="form-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              backgroundColor: '#FEF2F2',
              color: '#991B1B',
              border: '1px solid #FCA5A5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.5rem' }}>
              Lost Item Report Submitted
            </h2>

            <p style={{ fontSize: '0.975rem', color: '#475569', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              Your report for <strong>"{submittedItem.name}"</strong> has been added to the session records and is now visible on the Browse page.
            </p>

            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '2rem',
              textAlign: 'left',
              fontSize: '0.85rem',
              color: '#64748B'
            }}>
              <strong>Demonstration Session Notice:</strong> This report is saved locally in your browser state for project presentation purposes. No public contact numbers were exposed.
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                className="btn btn-outline"
                onClick={() => {
                  setSubmittedItem(null);
                  setFormData({
                    name: '',
                    category: 'Accessories',
                    location: 'Library',
                    date: new Date().toISOString().split('T')[0],
                    description: '',
                    safeNotes: '',
                    imagePreview: null
                  });
                }}
              >
                Submit Another Report
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/browse')}
              >
                View in Browse List
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container">
        <div style={{ maxWidth: '760px', margin: '0 auto 1.5rem' }}>
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-outline btn-sm"
            style={{ marginBottom: '1rem' }}
          >
            <ArrowLeft size={15} />
            <span>Back</span>
          </button>
          <h1 className="section-title">Report a Lost Item</h1>
          <p className="section-subtitle">
            Provide details about the item you misplaced. Your report will be listed in the campus browse feed.
          </p>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Item Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-control form-control-no-icon"
                placeholder="e.g. Black Leather Keychain, Grey Laptop Bag"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  className="select-control"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  {CATEGORIES.filter(c => c !== 'All Categories').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Last Seen Location</label>
                <select
                  name="location"
                  className="select-control"
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  {LOCATIONS.filter(l => l !== 'All Locations').map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Date Lost <span className="required">*</span>
              </label>
              <input
                type="date"
                name="date"
                className="form-control form-control-no-icon"
                value={formData.date}
                onChange={handleInputChange}
              />
              {errors.date && <span className="form-error">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Detailed Description <span className="required">*</span>
              </label>
              <textarea
                name="description"
                rows={4}
                className="form-control form-control-no-icon"
                placeholder="Describe color, brand, stickers, key counts, or distinct features..."
                value={formData.description}
                onChange={handleInputChange}
              />
              {errors.description && <span className="form-error">{errors.description}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Non-Sensitive Verification Details (Optional)</label>
              <input
                type="text"
                name="safeNotes"
                className="form-control form-control-no-icon"
                placeholder="e.g. Verification required by matching folder subject or internal tag."
                value={formData.safeNotes}
                onChange={handleInputChange}
              />
              <span className="form-hint">Do not include phone numbers, home addresses, or full ID numbers.</span>
            </div>

            {/* Optional Photo Upload */}
            <div className="form-group">
              <label className="form-label">Optional Item Photograph</label>
              <div style={{
                border: '2px dashed #CBD5E1',
                borderRadius: '8px',
                padding: '1.25rem',
                textAlign: 'center',
                backgroundColor: '#F8FAFC',
                cursor: 'pointer'
              }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                  id="lost-photo-input"
                />
                <label htmlFor="lost-photo-input" style={{ cursor: 'pointer' }}>
                  <Upload size={24} style={{ color: '#00B47D', marginBottom: '0.4rem' }} />
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0F2C59' }}>
                    Click to select a sample image
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#64748B' }}>PNG, JPG or JPEG (Max 5MB)</span>
                </label>

                {formData.imagePreview && (
                  <div style={{ marginTop: '1rem', position: 'relative', display: 'inline-block' }}>
                    <img 
                      src={formData.imagePreview} 
                      alt="Preview" 
                      style={{ maxHeight: '140px', borderRadius: '6px', border: '1px solid #E2E8F0' }} 
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Privacy notice */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '8px',
              padding: '0.85rem 1rem',
              fontSize: '0.825rem',
              color: '#1E40AF',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1.5rem'
            }}>
              <ShieldCheck size={20} style={{ flexShrink: 0 }} />
              <span>
                Demonstration Privacy Guarantee: ReClaim stores reports locally in memory for evaluation. No personal telephone or address details are published.
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button 
                type="button" 
                className="btn btn-outline" 
                onClick={() => navigate('/browse')}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Report...' : 'Submit Lost Report'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
