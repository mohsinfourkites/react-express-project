import React, { useState } from "react";
import styles from "./PackageCardMohsin.module.scss";
import {
  ratings,
  features,
  slideshowImages,
  OtherIcons,
} from "./ImageConstants";

const PackageCardMohsin: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slideshowImages.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.whiteFrame}>
        <div
          className={styles.slideshow}
          style={{
            backgroundImage: `url(${slideshowImages[currentSlide].src})`,
          }}
        >
          
          <button className={styles.arrowLeft} onClick={handlePrev}>
            <img src={OtherIcons[2].src} alt={OtherIcons[0].alt} />
            </button>
            <button className={styles.arrowRight} onClick={handleNext}>
            <img src={OtherIcons[2].src} alt={OtherIcons[1].alt} />
        </button>
          <div className={styles.slideIndicator}>
            {currentSlide + 1} / {slideshowImages.length}
          </div>
        </div>
        <button className={styles.popularButton}>
          <span>Popular</span>
        </button>
        <div className={styles.locationButton}>
          <i
            className={`${styles.icon} ${styles.mapMarker}`}
            style={{
              backgroundImage: `url(${OtherIcons[0].src})`, 
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <span className={styles.locationText}>Wooden Hut, Gulmarg</span>
        </div>

        <div className={styles.belowSlideShow}>
          <div className={styles.ratings}>
            {ratings.map((rating, idx) => (
              <img
                key={idx}
                src={rating.src}
                alt={rating.alt}
                className={styles.ratingImage}
              />
            ))}
            <span className={styles.ratingValue}>4.9</span>
            <span className={styles.reviews}>(23 Reviews)</span>
          </div>
          <div className={styles.features}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.feature}>
                <div
                  className={styles.featureIcon}
                  style={{ backgroundImage: `url(${feature.src})` }}
                ></div>
                <span className={styles.featureLabel}>{feature.label}</span>
              </div>
            ))}
          </div>
          <p className={styles.description}>
            Gulmarg has attracted millions of tourists throughout its existence
            with the scenic beauty of the Himalayan Mountains in the backdrop.
          </p>
        </div>
        <div className={styles.footer}>
          <button className={styles.viewDetailsButton}>View Details</button>
          <span className={styles.price}>₹ 5999</span>
        </div>
      </div>
    </div>
  );
};

export default PackageCardMohsin;
