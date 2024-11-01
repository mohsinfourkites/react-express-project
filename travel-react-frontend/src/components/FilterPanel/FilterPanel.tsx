import React from 'react';
import { X } from 'lucide-react';
import styles from './FilterPanel.module.scss';

// interface FilterPanelProps {
//   filters: {
//     location: string;
//     priceRange: [number, number];
//     duration: string;
//     groupSize: number;
//   };
//   locations: string[];
//   onFilterChange: (key: string, value: any) => void;
//   onReset: () => void;
// }



interface FilterType {
  location: string;
  priceRange: [number, number];
  duration: string;
  groupSize: number;
}

interface FilterPanelProps {

    filters: {
  
      location: string;
  
      priceRange: [number, number];
  
      duration: string;
  
      groupSize: number;
  
    };
  
    locations: string[];
  
    onFilterChange: (key: keyof FilterType, value: any) => void;
  
    onReset: () => void;
  
  }

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, locations, onFilterChange, onReset }) => {
  const durations = ['1-3 Days', '4-7 Days', '8+ Days'];
  const groupSizes = [2, 4, 6, 8, 10];

  return (
    <div className={styles.filterPanelContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Filters</h3>
        <button onClick={onReset} className={styles.resetButton}>
          <X className={styles.resetIcon} />
          Reset
        </button>
      </div>

      {/* Location Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>Location</label>
        <select
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
          className={styles.select}
        >
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>
          Price Range (₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()})
        </label>
        <div className={styles.rangeWrapper}>
          <input
            type="range"
            min="10000"
            max="50000"
            step="1000"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
            className={styles.rangeInput}
          />
        </div>
      </div>

      {/* Duration Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>Duration</label>
        <select
          value={filters.duration}
          onChange={(e) => onFilterChange('duration', e.target.value)}
          className={styles.select}
        >
          <option value="">Any Duration</option>
          {durations.map((duration) => (
            <option key={duration} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </div>

      {/* Group Size Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>Group Size (up to)</label>
        <select
          value={filters.groupSize}
          onChange={(e) => onFilterChange('groupSize', parseInt(e.target.value))}
          className={styles.select}
        >
          <option value={0}>Any Size</option>
          {groupSizes.map((size) => (
            <option key={size} value={size}>
              Up to {size} people
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;