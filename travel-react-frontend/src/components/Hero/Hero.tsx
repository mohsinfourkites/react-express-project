// Hero.tsx

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss'; // Import the SCSS module

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__background}></div>
      
      <div className={styles.hero__content}>
        <div>
          <h1>Discover Kashmir's Paradise</h1>
          <p>
            Experience the breathtaking beauty of the Valley of Kashmir with our handcrafted travel experiences
          </p>
          <Link to="/packages">
            <button>
              View Packages
              <ArrowRight className={styles.icon} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
