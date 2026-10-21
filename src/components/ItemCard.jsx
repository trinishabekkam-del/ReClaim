import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Package } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const ItemCard = ({ item, onViewDetails }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="item-card">
      <div className="item-card-image-wrap">
        <div className="item-card-badge">
          <StatusBadge status={item.status} />
        </div>
        
        {!imgError && item.image ? (
          <img 
            src={item.image} 
            alt={item.alt || item.name} 
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.5rem',
            backgroundColor: '#F1F5F9',
            color: '#64748B'
          }}>
            <Package size={36} />
            <span style={{ fontSize: '0.8rem' }}>{item.category}</span>
          </div>
        )}
      </div>

      <div className="item-card-body">
        <span className="item-card-category">{item.category}</span>
        <h3 className="item-card-title">{item.name}</h3>

        <div className="item-card-meta">
          <div className="meta-row">
            <MapPin size={15} style={{ color: '#00B47D', flexShrink: 0 }} />
            <span>{item.location}</span>
          </div>
          <div className="meta-row">
            <Calendar size={15} style={{ color: '#64748B', flexShrink: 0 }} />
            <span>Reported: {item.date}</span>
          </div>
        </div>

        <div className="item-card-footer">
          <span className="demo-data-tag">Demo data</span>
          <button 
            onClick={() => onViewDetails(item)} 
            className="btn btn-outline btn-sm"
          >
            <span>View Details</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
