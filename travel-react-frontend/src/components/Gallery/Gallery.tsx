// Gallery.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Gallery.module.scss'; // Import the SCSS module

interface GalleryImage {
  title: string;
  images: string[];
}

const galleryCategories: GalleryImage[] = [
  {
    title: 'Dal Lake Views',
    images: [
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590689080414-acf9d9877117?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1623953807269-845c99ba72b7?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    title: 'Gulmarg Landscapes',
    images: [
      'https://images.unsplash.com/photo-1621561248577-097d230bc4c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590689080414-acf9d9877117?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1622642305616-8f7454069661?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    title: 'Pahalgam Adventures',
    images: [
      'https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1623953807269-845c99ba72b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621561248577-097d230bc4c5?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

// Flatten the images from all categories into a single array
const allImages = galleryCategories.flatMap(category => category.images);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export const Gallery: React.FC = () => {
  return (
    <div className={styles.galleryContainer}>
      <h3 className={styles.galleryTitle}>Travel Gallery</h3>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {allImages.map((image, imageIndex) => (
            <div key={imageIndex} className="px-2">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image}
                  alt={`Gallery Image ${imageIndex + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
