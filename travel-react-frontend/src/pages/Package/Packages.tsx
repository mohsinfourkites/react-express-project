import React, { useState, useMemo } from 'react';
import styles from './Package.module.scss';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { tourPackages } from '../../data/tour-packages-data';
import { PackageCard } from '../../components/PackageCard/PackageCard';
import PackageCardMohsin from '../../components/MyFigma/PackageCardMohsin/PackageCardMohsin';
import { GulmargCard, PahalgamCard, SonmargCard } from '../../components/MyFigma/PackageCardMohsin/ReusableCardMohsin';

type FilterType = {
  location: string;
  priceRange: [number, number];
  duration: string;
  groupSize: number;
};

const initialFilters: FilterType = {
  location: '',
  priceRange: [0, 50000],
  duration: '',
  groupSize: 0,
};

const Packages: React.FC = () => {
  const [filters, setFilters] = useState<FilterType>(initialFilters);

  // Get unique locations from packages
  const locations: string[] = useMemo(() => {
    return Array.from(new Set(tourPackages.map((pkg: { location: string }) => pkg.location)));
  }, []);

  // Filter packages based on selected criteria
  const filteredPackages = useMemo(() => {
    return tourPackages.filter((pkg) => {
      if (filters.location && pkg.location !== filters.location) return false;
      if (pkg.price < filters.priceRange[0] || pkg.price > filters.priceRange[1]) return false;
      if (filters.duration) {
        const days = parseInt(pkg.duration);
        if (filters.duration === '1-3 Days' && (days < 1 || days > 3)) return false;
        if (filters.duration === '4-7 Days' && (days < 4 || days > 7)) return false;
        if (filters.duration === '8+ Days' && days < 8) return false;
      }
      if (filters.groupSize > 0 && pkg.maxPeople < filters.groupSize) return false;
      return true;
    });
  }, [filters]);

  const handleFilterChange = (key: keyof FilterType, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>Kashmir Tour Packages</h1>
        <p className={styles.description}>
          Discover our carefully curated selection of Kashmir travel packages designed to showcase the best of Paradise on Earth.
        </p>

        <div className={styles.content}>
          <div className={styles.filterPanel}>
            <FilterPanel
              filters={filters}
              locations={locations}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </div>

          <div className={styles.packageGrid}>
            {filteredPackages.length === 0 ? (
              <div className={styles.noPackages}>
                <p>No packages match your selected filters.</p>
                <button onClick={handleResetFilters} className={styles.resetButton}>
                  Reset Filters
                </button>
              </div>
            ) : 
            (
              <div className={styles.grid}>
                <PackageCardMohsin {...GulmargCard} />
                <PackageCardMohsin {...PahalgamCard} />
                <PackageCardMohsin {...SonmargCard} />

                <PackageCardMohsin {...GulmargCard} />
                <PackageCardMohsin {...PahalgamCard} />
                <PackageCardMohsin {...SonmargCard} />

                <PackageCardMohsin {...GulmargCard} />
                <PackageCardMohsin {...PahalgamCard} />
                <PackageCardMohsin {...SonmargCard} />
                
                {/* {filteredPackages.map((pkg) => (
                  <PackageCard key={pkg.id} {...pkg} />
                ))} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
