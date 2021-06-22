import React from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';

const DateSliderItem = ({ day, date, callback }) => {
  return (
    <IonSlide onClick={callback}>
      <span>{day}</span>
      <span>
        <b>{date}</b>
      </span>
    </IonSlide>
  );
};

export default DateSliderItem;
