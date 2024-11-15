import React from 'react';
import styles from './CardWithTextButton.module.scss';

const CardWithTextButton: React.FC = () => {
  return (
    <div className={styles.card}>
      {/* Add hover effect on image container */}
      <div className={styles.cardImgWrapper}>
        <img
          src="https://images.pexels.com/photos/3974036/pexels-photo-3974036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your custom URL
          alt="Card Image"
          className={styles.img}
        />
      </div>
      <div className={styles.cardSubtitle}>Type of work</div>
      <div className={styles.cardWrapper}>
        <div className={styles.cardTitle}>Project name</div>
        <div className={styles.cardIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            style={{ width: '100%', height: '100%' }}
          >
            <g>
              <circle cx={128} cy={128} r={96} opacity="0.2" />
              <circle cx={128} cy={128} r={96} fill="none" />
              <polyline points="134.1 161.9 168 128 134.1 94.1" fill="none" />
              <line x1={88} y1={128} x2={168} y2={128} fill="none" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardWithTextButton;
