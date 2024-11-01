import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import styles from "./ImageSlider.module.scss";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  return (
    <section
      aria-label="Image Slider"
      className={styles.imageSlider}
    >
      <a href="#after-image-slider-controls" className={styles.skipLink}>
        Skip Image Slider Controls
      </a>
      <div className={styles.sliderContainer}>
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={styles.imgSliderImg}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }} // Use transform for smoother transitions
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className={styles.imgSliderBtn}
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className={styles.imgSliderBtn}
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div className={styles.dotContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={styles.imgSliderDotBtn}
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
};

export default ImageSlider;
