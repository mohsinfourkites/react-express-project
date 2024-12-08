import React from 'react'
import styles from "./Gulmarg.module.scss"
import { LayoutGridDemo } from '../../../components/AceternityUI/LayoutGrid/LayoutGrid';
import TextAnimatedSlider from '../../../components/EldoraUI/TextAnimatedSlider/TextanimatedSlider';


// import { GradualSpacingText } from '../../../components/EldoraUI/TextAnimatedSlider/TextanimatedSlider';

const AboutGulmarg: React.FC = () => {
    const textForSlider = "Welcome to Gulmarg! The Winter Wonderland";
  return (
    <div className={styles.wholePage}>
    <div className={styles.heading}>
    <TextAnimatedSlider text={textForSlider} />
    </div>
    <div className={styles.imageGallery}>
    <LayoutGridDemo />
        </div>

    <div className = {styles.pageDivider}>
        <div className ={styles.leftSide}>
            <div className={styles.leftSideHeading}>
                <h1>Why Visit Gulmarg?</h1>
            </div>
            </div>

        <div className ={styles.rightSide}>
            <div className={styles.rightSideHeading}>
                <h1>Book Now</h1>
                </div>
            </div>
        
    </div>
    </div>
  )
}

export default AboutGulmarg;