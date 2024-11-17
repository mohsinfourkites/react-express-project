import React from 'react';
import styles from './Hero.module.scss';

// Import images from the assets folder
import heroBackgroundImage from '../../assets/images/Kashmir/Gulmarg/pexels-imadclicks-15344124.jpg';
import searchDestinationsImage from '../../assets/images/Kashmir/Search Destinations.png';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
        </div>

        <div className={styles.heroText}>
        <h1>Your world of joy</h1>
        <p>Find what makes you happy anytime, anywhere</p>
      </div>
      <div
        className={styles.searchDestinations}
        style={{ backgroundImage: `url(${searchDestinationsImage})` }}
      ></div>
        
      
    </section>
  );
};

export default HeroSection;
