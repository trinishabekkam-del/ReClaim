import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

export const EmptyState = ({ title = 'No items found', description = 'No reported lost or found belongings match your active search or filters.', onReset }) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <SearchX size={32} />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-desc">{description}</p>
      {onReset && (
        <button onClick={onReset} className="btn btn-outline btn-sm">
          <RotateCcw size={15} />
          <span>Clear All Filters</span>
        </button>
      )}
    </div>
  );
};
