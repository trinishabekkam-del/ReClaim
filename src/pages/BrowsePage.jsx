import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, Filter, ArrowUpDown } from 'lucide-react';
import { useItems } from '../context/ItemContext';
import { CATEGORIES, LOCATIONS } from '../data/mockItems';
import { ItemCard } from '../components/ItemCard';
import { ItemDetailsModal } from '../components/ItemDetailsModal';
import { EmptyState } from '../components/EmptyState';

export const BrowsePage = () => {
  const { items } = useItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All'); // 'All' | 'Lost' | 'Found'
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest'
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter and Sort Logic
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Status Filter
      if (statusFilter !== 'All' && item.status.toLowerCase() !== statusFilter.toLowerCase()) {
        return false;
      }

      // Category Filter
      if (categoryFilter !== 'All Categories' && item.category !== categoryFilter) {
        return false;
      }

      // Location Filter
      if (locationFilter !== 'All Locations' && item.location !== locationFilter) {
        return false;
      }

      // Search Query
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesLocation) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      if (sortBy === 'newest') {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
  }, [items, searchTerm, statusFilter, categoryFilter, locationFilter, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter('All');
    setCategoryFilter('All Categories');
    setLocationFilter('All Locations');
    setSortBy('newest');
  };

  const hasActiveFilters = 
    searchTerm !== '' || 
    statusFilter !== 'All' || 
    categoryFilter !== 'All Categories' || 
    locationFilter !== 'All Locations' ||
    sortBy !== 'newest';

  return (
    <div className="section-padding">
      <div className="container">
        {/* Page Title & Intro */}
        <div className="section-header">
          <h1 className="section-title">Find an Item</h1>
          <p className="section-subtitle">
            Search active reports across campus. Filter by category, location, or report type.
          </p>
        </div>

        {/* Filter and Search Panel */}
        <div className="filter-bar-container">
          <div className="filter-grid">
            {/* Search Input */}
            <div className="input-with-icon">
              <Search size={18} className="input-icon" />
              <input
                type="text"
                className="form-control"
                placeholder="Search by item name, description, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Status Filter */}
            <select
              className="select-control"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">Status: All Items</option>
              <option value="Found">Status: Found Only</option>
              <option value="Lost">Status: Lost Only</option>
            </select>

            {/* Category Filter */}
            <select
              className="select-control"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              className="select-control"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            {/* Sort & Reset */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <select
                className="select-control"
                style={{ minWidth: '130px' }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Sort: Newest</option>
                <option value="oldest">Sort: Oldest</option>
              </select>

              {hasActiveFilters && (
                <button 
                  onClick={handleResetFilters} 
                  className="btn btn-outline btn-sm"
                  title="Clear all filters"
                >
                  <RotateCcw size={15} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Info Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#64748B' }}>
          <div>
            Showing <strong>{filteredItems.length}</strong> {filteredItems.length === 1 ? 'item' : 'items'}
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.825rem' }}>
            Sample dataset for campus demonstration
          </div>
        </div>

        {/* Items Grid or Empty State */}
        {filteredItems.length > 0 ? (
          <div className="items-grid">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onViewDetails={(selected) => setSelectedItem(selected)}
              />
            ))}
          </div>
        ) : (
          <EmptyState onReset={handleResetFilters} />
        )}
      </div>

      {/* Item Details Modal */}
      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};
