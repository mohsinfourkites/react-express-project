import React from "react";
import styles from "./AboutTourAndText.module.scss";
import aboutImage from "../../../assets/icons/Figma/AboutTourAndText/about_9_1.png";
import tourGuideImage from "../../../assets/icons/Figma/AboutTourAndText/tour-guide.png";
import tripImage from "../../../assets/icons/Figma/AboutTourAndText/trip.png";
import askUsImage from "../../../assets/icons/Figma/AboutTourAndText/ask-us.png";
import touristImage from "../../../assets/icons/Figma/AboutTourAndText/tourist-pointing-lateral.png";

const AboutTourAndTextMohsin: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.backgroundWrapper}>
          <img
            src={aboutImage}
            alt="About Background"
            className={styles.aboutBackground}
          />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.textContent}>
          <h1 className={styles.mainHeading}>Let’s Go Together</h1>
          <h2 className={styles.subHeading}>
            We Guide You To Destinations where 
            <br />
            Unforgettable Memories Are Made
          </h2>

          <p className={styles.description}>
          Discover breathtaking destinations that promise to create cherished 
          moments you'll treasure forever. Let us guide you to places where every 
          experience turns into a beautiful memory.
          </p>
        </div>

        <div className={styles.detailsAndPic}>
        <div className={styles.textAndImages}>
        <div className={styles.features}>

        <div className={styles.exclusiveTrip}>
            <div className={styles.exclusiveTripIcon}>
            <img
              src={tripImage}
              alt="Trip Icon"
            />
            </div>
            <div className={styles.exclusiveTripText}>
            <h3 className={styles.exclusiveTripTitle}>Exclusive Trip</h3>
            <p className={styles.exclusiveTripDescription}>
            A unique journey crafted for unforgettable experiences.
            </p>
            </div>
        </div>

        <div className={styles.exclusiveTrip}>
            <div className={styles.exclusiveTripIcon}>
            <img
              src={tourGuideImage}
              alt="Trip Icon"
              className={styles.featureImage}
            />
            </div>
            <div className={styles.exclusiveTripText}>
            <h3 className={styles.exclusiveTripTitle}>Professional Guide</h3>
            <p className={styles.exclusiveTripDescription}>
            Expert guidance for a seamless and insightful trip.
            </p>
            </div>  
        </div>

        <div className={styles.askUsImage}>
            <img src={askUsImage} alt="Ask Us"  />
            </div>
        </div>

        </div>
        <div className={styles.additionalImages}>
          <img
            src={touristImage}
            alt="Tourist Pointing"
            className={styles.touristImage}
          />
        </div>
      </div>
     
      </div>
      
    </section>
  );
};

export default AboutTourAndTextMohsin;
