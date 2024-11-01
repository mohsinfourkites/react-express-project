// PackageCard.tsx

import { Calendar, MapPin, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './PackageCard.module.scss'; // Import the SCSS module

interface PackageCardProps {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  maxPeople: number;
  description: string;
}

export function PackageCard({
  id,
  title,
  location,
  duration,
  price,
  image,
  maxPeople,
  description
}: PackageCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <div className={styles.priceTag}>₹{price.toLocaleString()}</div>
      </div>
      
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className="line-clamp-2">{description}</p>
        
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <MapPin />
            <span>{location}</span>
          </div>
          <div className={styles.detailItem}>
            <Calendar />
            <span>{duration}</span>
          </div>
          <div className={styles.detailItem}>
            <Users />
            <span>Up to {maxPeople} people</span>
          </div>
        </div>

        <Link to={`/booking/${id}`}>
          <button className={styles.bookButton}>
            Book Now
            <DollarSign className="h-4 w-4 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}
