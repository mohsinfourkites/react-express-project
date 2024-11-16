import React, { useState } from "react";
import styles from "./PackageCardMohsin.module.scss";
import { packageData } from "./CardDetails1";

export interface SlideshowImage {
  src: string;
  alt: string;
}

export interface Feature {
  src: string;
  alt: string;
  label: string;
}

export interface PackageCardProps {
  slideshowImages: SlideshowImage[];
  location: string;
  ratings: SlideshowImage[];
  ratingValue: number;
  reviewCount: number;
  features: Feature[];
  description: string;
  price: string;
}

const PackageCardMohsin: React.FC<PackageCardProps> = ({
  slideshowImages,
  location,
  ratings,
  ratingValue,
  reviewCount,
  features,
  description,
  price,
}) => {
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
            <img
              src={packageData.OtherIcons[0].src}
              alt={packageData.OtherIcons[0].alt}
            />
          </button>
          <button className={styles.arrowRight} onClick={handleNext}>
            <img
              src={packageData.OtherIcons[0].src}
              alt={packageData.OtherIcons[0].alt}
            />
          </button>
          <div className={styles.slideIndicator}>
            {currentSlide + 1} / {slideshowImages.length}
          </div>
        </div>
        <button className={styles.popularButton}>
          <span>Popular</span>
        </button>
        <div className={styles.locationButton}>
          <span className={styles.locationText}>{location}</span>
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
            <span className={styles.ratingValue}>{ratingValue}</span>
            <span className={styles.reviews}>({reviewCount} Reviews)</span>
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
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
          <button className={styles.viewDetailsButton}>View Details</button>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default PackageCardMohsin;
