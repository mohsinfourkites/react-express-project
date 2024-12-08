import React from "react";
import style from "./BookingCard.module.scss";
import BasicDateRangeCalendar from "../MaterialUI/CalenderRange/CalenderRange";

const BookingCardOwn: React.FC = () => {
  return (
    <div className={style.MainPageBookingCard}>
        <div className={style.bookingCard}>
            <div className = {style.bookingCardHeading}>
                <div className={style.PriceTagPreDefined}> Book Your Stay</div>
                <div className={style.RatingPreDefined}> Price 200$</div>
                </div>
            <div className={style.bookingCardForm}>
                <div className={style.calenderSection}>
                    <div className={style.DateSelectText}> Select A Date</div>
                    <BasicDateRangeCalendar />
                </div>
                
               </div>
        </div>

    </div>
  )
}

export default BookingCardOwn;