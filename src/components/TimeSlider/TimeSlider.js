import React, { useState, useEffect } from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import './TimeSlider.scss';

const TimeSlider = ({ selectTime, times }) => {
  const [singleSwiper, setSingleSwiper] = useState();
  const initSingle = async function () {
    setSingleSwiper(await this.getSwiper());
    selectTime(times[slideOpts.initialSlide]);
  };
  const slideChangeHandler = async () => {
    selectTime(times[singleSwiper?.activeIndex]);
  };
  let setDateStatus = (index) => {
    singleSwiper.slideTo(index);
  };
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 3.5,
    centeredSlides: true,
  };
  return (
    <IonSlides
      id="timeSlider"
      onIonSlidesDidLoad={initSingle}
      onIonSlideDidChange={slideChangeHandler}
      options={slideOpts}>
      {times?.length > 1 &&
        times.map((item, index) => (
          <IonSlide key={item.id} onClick={() => setDateStatus(index)}>
            {item.time}
          </IonSlide>
        ))}
    </IonSlides>
  );
};

export default TimeSlider;
