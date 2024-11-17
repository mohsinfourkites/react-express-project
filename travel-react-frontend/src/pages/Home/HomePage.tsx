// Home.tsx

import React from 'react';

import styles from './HomePage.module.scss'; // Import the SCSS module
import Hero from '../../components/Hero/Hero';
import { PackageCard } from '../../components/PackageCard/PackageCard';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Gallery } from '../../components/Gallery/Gallery';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import MultiLevelNavbar from '../../components/MultiLevelNavbar/MultiLevelNavbar';
import TopPlaces from '../TopPlaces/TopPlaces';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import HeroSection from '../../components/Hero/Hero';
import PackageCardMohsin from '../../components/MyFigma/PackageCardMohsin/PackageCardMohsin';
import { GulmargCard, PahalgamCard, SonmargCard } from '../../components/MyFigma/PackageCardMohsin/ReusableCardMohsin';

interface Package {
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
}


{/* Image URLs and Alt Text */}
const IMAGES = [
  { url: "https://images.unsplash.com/photo-1646204894165-95ed03d988ad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Car One" },
  { url: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Car Two" },
  { url: "https://plus.unsplash.com/premium_photo-1697730277839-440df1a4415f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Car Three" },
  { url: "https://images.unsplash.com/photo-1646204894165-95ed03d988ad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Car Four" },
  { url: "https://images.unsplash.com/photo-1650384585230-ab9ade0cec63?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Car Five" },
]



const packages: Package[] = [
  {
    title: 'Tropical Paradise',
    location: 'Maldives',
    duration: '7 Days',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mountain Adventure',
    location: 'Swiss Alps',
    duration: '5 Days',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cultural Experience',
    location: 'Kyoto, Japan',
    duration: '10 Days',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cultural Experience',
    location: 'Kyoto, Japan',
    duration: '10 Days',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cultural Experience',
    location: 'Kyoto, Japan',
    duration: '10 Days',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cultural Experience',
    location: 'Kyoto, Japan',
    duration: '10 Days',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
  },
];

const Home: React.FC = () => {
  return (
    <>
     
       <HeroSection />

       <div className={styles.TopPlacesToVisitText}> 
        <h1> Top Places To Visit</h1>
        </div>

      {/* <div className={styles.packageCardContainer}>
      <PackageCardMohsin {...GulmargCard} />
          <PackageCardMohsin {...PahalgamCard} />
          <PackageCardMohsin {...SonmargCard} />
          </div> */}
     

      {/* Contact Section */}
      {/* <section className={styles.container}>
        <div className="max-w-7xl mx-auto">
          <h2>Contact Us</h2>
          <ContactForm />
        </div>
      </section> */}
    </>
  );
}

export default Home;
