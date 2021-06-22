import { IonSlides, IonSlide } from '@ionic/react';
import React, {  useState } from 'react';
import avatar0 from '../../img/0.png' 
import avatar1 from '../../img/1.png' 
import './DoctorsSlider.scss';

const DoctorsSlider: React.FC<any> = ({selectDoctor}) => { 
  let doctors = [
    { id: '0', name: 'Иван Иванов', img: avatar0 },
    { id: '1', name: 'Елена Шимановская', img: avatar1 },
  ];
  const slideOpts = {
    initialSlide: 0,
    spaceBetween: 28,
  };
  const [singleSwiper, setSingleSwiper] = useState({activeIndex:0});

  const initSingle = async function (this: any) {
    setSingleSwiper(await this.getSwiper());
    selectDoctor(doctors[slideOpts.initialSlide]);
  };
  const slideChangeHandler = async (event: any) => {
    selectDoctor(doctors[singleSwiper.activeIndex])
}
 return (
    <IonSlides id="slider" onIonSlideDidChange={(event: any)=> slideChangeHandler(event)} onIonSlidesDidLoad={initSingle}    options={slideOpts} >
      {doctors.map((item) => (
        <IonSlide key={item.id}>
          <h3 >{item.name}</h3>
          <img src={item.img} alt={"avatar"}/> 
          <div className="description">
            <span>Длительность консультации</span>
            <span><b>50 минут</b></span>
           </div>
        </IonSlide>
      ))}
    </IonSlides>
  );
};

export default DoctorsSlider;
