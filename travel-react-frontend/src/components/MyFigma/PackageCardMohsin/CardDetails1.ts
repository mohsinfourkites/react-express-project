import Star from "../../../assets/icons/Figma/PackageCard/star.png";
import Hotel from "../../../assets/icons/Figma/PackageCard/resort.png";
import Man from "../../../assets/icons/Figma/PackageCard/man.png";
import Bed from "../../../assets/icons/Figma/PackageCard/bed.png";
import Bathroom from "../../../assets/icons/Figma/PackageCard/bathroom.png";
import Slide1 from "../../../assets/images/Kashmir/kashmirjungle.jpg";
import Slide2 from "../../../assets/images/Kashmir/meadows.jpg";
import Slide3 from "../../../assets/images/Kashmir/shikara.jpg";
import Slide4 from "../../../assets/images/Kashmir/snow.jpg";
import LeftArrow from '../../../assets/icons/Figma/PackageCard/left-arrow.png';

export const packageData = {
  slideshowImages: [
    { src: Slide1, alt: "Kashmir Jungle" },
    { src: Slide2, alt: "Meadows" },
    { src: Slide3, alt: "Shikara" },
    { src: Slide4, alt: "Snow" },
  ],
  location: "Wooden Hut, Gulmarg",
  ratings: [
    { src: Star, alt: "Star 1" },
    { src: Star, alt: "Star 2" },
    { src: Star, alt: "Star 3" },
    { src: Star, alt: "Star 4" },
    { src: Star, alt: "Star 5" },
  ],
  ratingValue: 4.9,
  reviewCount: 23,
  features: [
    { src: Hotel, alt: "Hotel", label: "Hotel" },
    { src: Man, alt: "2 Persons", label: "2 People" },
    { src: Bed, alt: "1 Bed", label: "1 Bed" },
    { src: Bathroom, alt: "1 Bath", label: "1 Bath" },
  ],
  description:
    "Gulmarg has attracted millions of tourists with the scenic beauty of the Himalayan Mountains in the backdrop.",
  price: "₹ 5999",
    OtherIcons: [
    // { src: Location, alt: "Location" },
    // { src: Map, alt: "Map" },
    { src: LeftArrow, alt: "Left Arrow" },
    // { src: RightArrow, alt: "Right Arrow" },
  ],
};


export const packageData1 = {
    slideshowImages: [
      { src: Slide1, alt: "Kashmir Jungle" },
      { src: Slide2, alt: "Meadows" },
      { src: Slide3, alt: "Shikara" },
      { src: Slide4, alt: "Snow" },
    ],
    location: "Wooden Hut, Gulmarg",
    ratings: [
      { src: Star, alt: "Star 1" },
      { src: Star, alt: "Star 2" },
      { src: Star, alt: "Star 3" },
      { src: Star, alt: "Star 4" },
      { src: Star, alt: "Star 5" },
    ],
    ratingValue: 4.9,
    reviewCount: 23,
    features: [
      { src: Hotel, alt: "Hotel", label: "Hotel" },
      { src: Man, alt: "2 Persons", label: "2 People" },
      { src: Bed, alt: "1 Bed", label: "1 Bed" },
      { src: Bathroom, alt: "1 Bath", label: "1 Bath" },
    ],
    description:
      "Gulmarg has attracted millions of tourists with the scenic beauty of the Himalayan Mountains in the backdrop.",
    price: "₹ 5999",
    OtherIcons: [
        // { src: Location, alt: "Location" },
        // { src: Map, alt: "Map" },
        { src: LeftArrow, alt: "Left Arrow" },
        // { src: RightArrow, alt: "Right Arrow" },
      ],
  };
