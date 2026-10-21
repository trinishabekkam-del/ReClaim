import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Info } from 'lucide-react';
import { useItems } from '../context/ItemContext';

export const ContactPage = () => {
  const { addFeedback } = useItems();

  const [formData, setFormData] = useState({
    name: '',
    category: 'General Feedback',
    message: ''
  });

  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setError('Please enter a feedback message before submitting.');
      return;
    }

    setError('');
    addFeedback(formData);
    setSubmitted(true);
  };

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
          <h1 className="section-title">Student Feedback & Contact</h1>
          <p className="section-subtitle">
            Have suggestions for improving ReClaim on campus? Leave feedback for our student project team.
          </p>
        </div>

        <div className="form-card">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: '#E6F7F0', color: '#00B47D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.5rem' }}>
                Feedback Submitted
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#475569', marginBottom: '1.5rem' }}>
                Thank you for helping us refine the ReClaim platform. Your input has been logged for evaluation.
              </p>
              <button 
                className="btn btn-outline btn-sm"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', category: 'General Feedback', message: '' });
                }}
              >
                Submit Additional Feedback
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name (Optional)</label>
                <input
                  type="text"
                  className="form-control form-control-no-icon"
                  placeholder="e.g. Jordan Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Feedback Category</label>
                <select
                  className="select-control"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="General Feedback">General Feedback</option>
                  <option value="Feature Suggestion">Feature Suggestion</option>
                  <option value="Campus Security Query">Campus Security Query</option>
                  <option value="Bug Report">Bug Report</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Your Message <span className="required">*</span>
                </label>
                <textarea
                  rows={5}
                  className="form-control form-control-no-icon"
                  placeholder="Share your thoughts, UI suggestions, or questions about campus recovery..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (error) setError('');
                  }}
                />
                {error && <span className="form-error">{error}</span>}
              </div>

              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                fontSize: '0.825rem',
                color: '#64748B',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                <Info size={16} style={{ color: '#00B47D', flexShrink: 0 }} />
                <span>
                  Demo Notice: Feedback submitted here is stored in application state for project evaluation purposes.
                </span>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                <Send size={16} />
                <span>Submit Feedback</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
