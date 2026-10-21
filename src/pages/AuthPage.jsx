import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, User, ShieldAlert, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const AuthPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('signin'); // 'signin' | 'register'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    studentId: ''
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid campus email address is required (@univ.edu).';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (tab === 'register' && !formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSuccess(true);
  };

  return (
    <div className="section-padding">
      <div className="container">
        <div className="form-card" style={{ maxWidth: '460px', padding: '2.5rem 2rem' }}>
          {/* Logo & Brand */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <img 
              src="/logo.png.jpeg" 
              alt="ReClaim Logo" 
              style={{ height: '48px', margin: '0 auto 0.75rem', objectFit: 'contain' }} 
            />
            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F2C59' }}>
              Campus Member Portal
            </h1>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.2rem' }}>
              ReClaim Lost & Found System
            </p>
          </div>

          {/* Demo Notice Banner */}
          <div style={{
            backgroundColor: '#EFF6FF',
            border: '1px solid #BFDBFE',
            borderRadius: '8px',
            padding: '0.75rem',
            fontSize: '0.8rem',
            color: '#1E40AF',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem',
            marginBottom: '1.5rem'
          }}>
            <ShieldAlert size={16} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>
              <strong>Frontend Demonstration Only:</strong> No backend server is connected. Passwords are not saved or sent anywhere.
            </span>
          </div>

          {/* Tab Switcher */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem',
            backgroundColor: '#F1F5F9',
            padding: '0.25rem',
            borderRadius: '8px',
            marginBottom: '1.5rem'
          }}>
            <button
              type="button"
              className={`btn btn-sm ${tab === 'signin' ? 'btn-navy' : ''}`}
              style={{
                backgroundColor: tab === 'signin' ? '#0F2C59' : 'transparent',
                color: tab === 'signin' ? '#ffffff' : '#64748B',
                boxShadow: 'none'
              }}
              onClick={() => { setTab('signin'); setIsSuccess(false); }}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`btn btn-sm ${tab === 'register' ? 'btn-navy' : ''}`}
              style={{
                backgroundColor: tab === 'register' ? '#0F2C59' : 'transparent',
                color: tab === 'register' ? '#ffffff' : '#64748B',
                boxShadow: 'none'
              }}
              onClick={() => { setTab('register'); setIsSuccess(false); }}
            >
              Create Account
            </button>
          </div>

          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#E6F7F0', color: '#00B47D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F2C59', marginBottom: '0.5rem' }}>
                {tab === 'signin' ? 'Signed In (Demo Mode)' : 'Account Created (Demo Mode)'}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#475569', marginBottom: '1.5rem' }}>
                You can now test submitting reports or searching items.
              </p>
              <button className="btn btn-primary btn-full" onClick={() => navigate('/browse')}>
                Proceed to Browse Feed
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {tab === 'register' && (
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <div className="input-with-icon">
                    <User size={18} className="input-icon" />
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Campus Email</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="student@university.edu"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              {tab === 'register' && (
                <div className="form-group">
                  <label className="form-label">Student / Staff ID (Optional)</label>
                  <input
                    type="text"
                    name="studentId"
                    className="form-control form-control-no-icon"
                    placeholder="e.g. STU-2026-9918"
                    value={formData.studentId}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.password && <span className="form-error">{errors.password}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: '1rem' }}>
                {tab === 'signin' ? 'Sign In (Demonstration)' : 'Register Account (Demonstration)'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
