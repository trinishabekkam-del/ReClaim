import React from 'react';

export const StatusBadge = ({ status }) => {
  const isFound = status?.toLowerCase() === 'found';
  return (
    <span className={`badge ${isFound ? 'badge-found' : 'badge-lost'}`}>
      <span style={{ 
        width: 6, 
        height: 6, 
        borderRadius: '50%', 
        backgroundColor: isFound ? '#059669' : '#DC2626',
        display: 'inline-block' 
      }}></span>
      {status}
    </span>
  );
};
