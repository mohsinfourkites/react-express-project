import { FC, useState } from 'react';
import styles from './PackageCard.module.scss';
import { packageData } from './constants';

const PackageCard: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % packageData.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + packageData.images.length) % packageData.images.length);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <button className={styles.bookmarkButton}>★</button>
        <img
          src={packageData.images[currentImageIndex].src}
          alt={packageData.images[currentImageIndex].alt}
          className={styles.image}
        />
        <button className={styles.prevButton} onClick={handlePrevImage}>←</button>
        <button className={styles.nextButton} onClick={handleNextImage}>→</button>
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>{packageData.heading}</h2>
        <h3 className={styles.subheading}>
          <i className="location-icon" /> {packageData.subheading}
        </h3>
        <div className={styles.details}>
          {packageData.details.map((detail, index) => (
            <div key={index} className={styles.detail}>
              <i className={detail.icon} /> {detail.text}
            </div>
          ))}
        </div>
        <p className={styles.description}>{packageData.description}</p>
        <div className={styles.footer}>
          <button className={styles.detailsButton}>Details</button>
          <span className={styles.price}>₹ {packageData.price}</span>
          <button className={styles.mapButton}>
            <i className="map-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;