import React, { useState } from 'react';
import styles from './Package.module.scss';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import PackageCardMohsin from '../../components/MyFigma/PackageCardMohsin/PackageCardMohsin';
import { BangusCard, GulmargCard, GurezCard, LehLadakhCard, PahalgamCard, SonmargCard, SrinagarCard } from '../../components/MyFigma/PackageCardMohsin/ReusableCardMohsin';

type Filters = {
  location: string;
  priceRange: [number, number];
  duration: string;
  groupSize: number;
  rating: number;
};

const allPackages = [GulmargCard, PahalgamCard, SonmargCard, SrinagarCard, LehLadakhCard, GurezCard, BangusCard]; // Add other packages here

const Packages: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    location: '',
    priceRange: [1000, 50000],
    duration: '',
    groupSize: 0,
    rating: 0,
  });

  const [filteredPackages, setFilteredPackages] = useState(allPackages);

  const handleFilterChange = (key: keyof Filters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filters: Filters) => {
    const filtered = allPackages.filter((pkg) => {
      const matchesLocation =
        !filters.location || pkg.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesPrice =
        filters.priceRange[0] <= parseInt(pkg.price.replace(/[^\d]/g, '')) &&
        parseInt(pkg.price.replace(/[^\d]/g, '')) <= filters.priceRange[1];
      const matchesDuration =
        !filters.duration || pkg.features.some((feature) => feature.label.includes(filters.duration));
      const matchesGroupSize =
        !filters.groupSize || pkg.features.some((feature) => feature.label.includes(`${filters.groupSize} Persons`));
      const matchesRating =
        !filters.rating || pkg.ratingValue >= filters.rating;

      return matchesLocation && matchesPrice && matchesDuration && matchesGroupSize && matchesRating;
    });

    setFilteredPackages(filtered);
  };

  const handleReset = () => {
    setFilters({
      location: '',
      priceRange: [10000, 50000],
      duration: '',
      groupSize: 0,
      rating: 0,
    });
    setFilteredPackages(allPackages);
  };

  return (
    <div className={styles.packagesPage}>
      {/* Filter Panel */}
      <FilterPanel
        filters={filters}
        locations={['Gulmarg', 'Pahalgam', 'Sonmarg', 'Bangus', 'Srinagar', 'Ladakh', 'Gurez']} // Customize as needed
        onFilterChange={handleFilterChange}
        onReset={handleReset}
      />

      {/* Package Cards */}
      <div className={styles.cardsSection}>
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg, idx) => <PackageCardMohsin key={idx} {...pkg} />)
        ) : (
          <p>No packages match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Packages;