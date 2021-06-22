import { useState } from 'react';
import { IonSlides } from '@ionic/react';
import DateSliderItem from '../DateSliderItem';
import './DateSlider.scss';

const DateSlider = ({ selectDate, dates }) => {
  const [singleSwiper, setSingleSwiper] = useState();
  const initSingle = async function () {
    setSingleSwiper(await this.getSwiper());
    selectDate(dates[slideOpts.initialSlide]);
  };

  const slideChangeHandler = async (event) => {
    selectDate(dates[singleSwiper?.activeIndex]);
  };
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 24,
    slidesPerView: 3.5,
    centeredSlides: true,
  };

  let setDateStatus = (index) => {
    singleSwiper.slideTo(index);
  };
  return (
    <IonSlides
      id="dateSlider"
      onIonSlidesDidLoad={initSingle}
      onIonSlideDidChange={(event) => slideChangeHandler(event)}
      options={slideOpts}>
      {dates.map((item, index) => (
        <DateSliderItem
          key={item.id}
          day={item.day}
          date={item.date}
          callback={() => setDateStatus(index)}
        />
      ))}
    </IonSlides>
  );
};

export default DateSlider;
