import React, { useState } from "react";
import styles from "./PackageCardMohsin.module.scss";
import { GulmargCard } from "./ReusableCardMohsin";
import StarRatingComponent from "react-star-rating-component";
import fullStar from "../../../assets/icons/Stars/fullstar.png";
import halfStar from "../../../assets/icons/Stars/halfstar.png";
import emptyStar from "../../../assets/icons/Stars/emptystar.png";

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
  ratingValue: number;
  reviewCount: number;
  features: Feature[];
  description: string;
  price: string;
}

const PackageCardMohsin: React.FC<PackageCardProps> = ({
  slideshowImages,
  location,
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

  // Ensure ratingValue is within the range of 0 to 5
  const validRatingValue = Math.min(Math.max(ratingValue, 0), 5);

  return (
    <div className={styles.card}>
      <div className={styles.whiteFrame}>
        <div
          className={styles.slideshow}
          style={{
            backgroundImage: `url(${slideshowImages[currentSlide]?.src || ''})`,
          }}
        >
          <button className={styles.arrowLeft} onClick={handlePrev}>
            <img
              src={GulmargCard.OtherIcons[0]?.src || ''}
              alt={GulmargCard.OtherIcons[0]?.alt || ''}
            />
          </button>
          <button className={styles.arrowRight} onClick={handleNext}>
            <img
              src={GulmargCard.OtherIcons[0]?.src || ''}
              alt={GulmargCard.OtherIcons[0]?.alt || ''}
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
            <StarRatingComponent
              name="rating"
              starCount={5}
              value={validRatingValue}
              editing={false}
              starColor="#ffd700"
              emptyStarColor="#d3d3d3"
              renderStarIcon={(nextValue, prevValue, name) => {
                if (nextValue <= validRatingValue) {
                  return <img src={fullStar} className={styles.ratingImage} alt="Full Star" />;
                }
                return <img src={emptyStar} className={styles.ratingImage} alt="Empty Star" />;
              }}
              renderStarIconHalf={(nextValue, prevValue, name) => (
                <img src={halfStar} className={styles.ratingImage} alt="Half Star" />
              )}
            />
            <span className={styles.ratingValue}>{ratingValue.toFixed(1)}</span>
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