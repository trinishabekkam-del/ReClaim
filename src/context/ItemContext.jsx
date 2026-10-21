import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_ITEMS, getCategoryDefaultImage } from '../data/mockItems';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      // Clear stale browser localStorage cache from previous sessions
      const saved = localStorage.getItem('reclaim_demo_items');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Filter out stale demo items with external URLs or mismatched images
          const userCreatedOnly = parsed.filter(item => !item.id.startsWith('rec-00'));
          return [...INITIAL_ITEMS, ...userCreatedOnly];
        }
      }
    } catch (e) {
      console.error('Failed to parse saved items from localStorage', e);
    }
    return INITIAL_ITEMS;
  });

  const [feedbackList, setFeedbackList] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('reclaim_demo_items', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save items to localStorage', e);
    }
  }, [items]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const addItem = (newReport) => {
    const categoryImage = getCategoryDefaultImage(newReport.category);
    const newItem = {
      id: `rec-${Date.now()}`,
      name: newReport.name,
      category: newReport.category || 'Accessories',
      location: newReport.location || 'Campus Center',
      status: newReport.status, // 'Lost' or 'Found'
      date: newReport.date || new Date().toISOString().split('T')[0],
      description: newReport.description,
      image: newReport.image || categoryImage,
      alt: newReport.alt || `${newReport.name} (${newReport.category})`,
      safeNotes: newReport.safeNotes || (newReport.status === 'Lost'
        ? 'Ownership verified via detailed description of contents or markings.'
        : 'Stored at designated campus security desk for safe claim.'),
      isDemoData: true
    };

    setItems((prev) => [newItem, ...prev]);
    showToast(`New ${newItem.status.toLowerCase()} item report added to current session!`, 'success');
    return newItem;
  };

  const getItemById = (id) => {
    return items.find((item) => String(item.id) === String(id));
  };

  const addFeedback = (feedbackData) => {
    const entry = {
      id: `fb-${Date.now()}`,
      ...feedbackData,
      createdAt: new Date().toISOString()
    };
    setFeedbackList((prev) => [entry, ...prev]);
    showToast('Thank you! Your feedback has been received (demo mode).', 'success');
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        getItemById,
        feedbackList,
        addFeedback,
        toast,
        showToast
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemProvider');
  }
  return context;
};
