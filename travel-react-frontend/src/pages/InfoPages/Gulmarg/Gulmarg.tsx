import React from 'react'
import styles from "./Gulmarg.module.scss"
import { LayoutGridDemo } from '../../../components/AceternityUI/LayoutGrid/LayoutGrid';
import BookingCardOwn from '../../../components/BookingCard/BookingCard';
import TextAnimatedSlider from '../../../components/EldoraUI/TextAnimatedSlider/TextAnimatedSlider';
import DateRangeCalender from '../../../components/NextUI/DateRangeCalender/DateRangeCalender';
import DateRangePickerNextUI from '../../../components/NextUI/DateRangeCalender/DateRangePicker';
import DateRangePickerNPM from '../../../components/DateRangePickerNPM/DateRangePickerNPM';
import RangeCalendar from '../../../components/DateRangePickerNPM/DateRangePickerNPM';
import DateRangePickerComponent from '../../../components/DateRangePicker/DateRangePicker';


// import { GradualSpacingText } from '../../../components/EldoraUI/TextAnimatedSlider/TextanimatedSlider';

const AboutGulmarg: React.FC = () => {
    const textForSlider = "Welcome to Gulmarg! The Winter Wonderland";
  return (
    
    <div className={styles.wholePage}>
        {/* <RangeCalendar /> */}
        <DateRangePickerComponent />
        {/* <DateRangeCalender />
        <DateRangePickerNextUI /> */}
       
    {/* <div className={styles.heading}>
    <TextAnimatedSlider text={textForSlider} />
    </div>
    <div className={styles.imageGallery}>
    <LayoutGridDemo />
        </div> */}

    <div className = {styles.pageDivider}>
        <div className ={styles.leftSide}>
            <div className={styles.leftSideHeading}>
                <h1>Why Visit Gulmarg?</h1>
                {/* <DateRangeCalender /> */}
            </div>
            </div>

        <div className ={styles.rightSide}>
            <div className={styles.rightSideHeading}>
                <h1>Book Now</h1>
                {/* <BookingCardOwn /> */}
               
                </div>
            </div>
        
    </div>
    </div>
  )
}

export default AboutGulmarg;