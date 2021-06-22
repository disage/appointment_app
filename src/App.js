import { IonApp, IonPage, IonButton } from '@ionic/react';
import DoctorsSlider from './components/DoctorsSlider/DoctorsSlider';
import { useState } from 'react';
import DateSlider from './components/DateSlider/DateSlider';
import TimeSlider from './components/TimeSlider/TimeSlider';
import firebase from './firebase';

import '@ionic/react/css/core.css';
import '@ionic/react/css/typography.css';
import './App.scss';

const App = () => {
  //Mocks data
  let times0 = [
    { id: '1', time: '11:00', doctorId: '0' },
    { id: '2', time: '12:00', doctorId: '0' },
    { id: '3', time: '13:30', doctorId: '0' },
    { id: '4', time: '14:00', doctorId: '0' },
    { id: '5', time: '15:00', doctorId: '0' },
    { id: '6', time: '16:00', doctorId: '0' },
  ];
  let times1 = [
    { id: '7', time: '14:30', doctorId: '1' },
    { id: '8', time: '15:30', doctorId: '1' },
    { id: '9', time: '16:30', doctorId: '1' },
    { id: '10', time: '17:30', doctorId: '1' },
    { id: '11', time: '18:30', doctorId: '1' },
  ];
  let date0 = [
    { id: '1', day: 'Ср', date: '27', month: 'мая' },
    { id: '2', day: 'Чт', date: '28', month: 'мая' },
    { id: '3', day: 'Пт', date: '29', month: 'мая' },
    { id: '4', day: 'Ср', date: '01', month: 'июня' },
    { id: '5', day: 'Чт', date: '02', month: 'июня' },
    { id: '6', day: 'Чт', date: '03', month: 'июня' },
    { id: '7', day: 'Чт', date: '04', month: 'июня' },
  ];
  let date1 = [
    { id: '8', day: 'Пт', date: '05', month: 'июня' },
    { id: '9', day: 'Сб', date: '06', month: 'июня' },
    { id: '10', day: 'Вс', date: '07', month: 'июня' },
    { id: '11', day: 'Пн', date: '08', month: 'июня' },
  ];
  //States
  const [selectedDate, setSelectedDate] = useState({ date: '01', month: 'мая', day: 'Ср' });
  const [selectedTime, setSelectedTime] = useState({ time: '00:00' });
  const [selectedDoctor, setSelectedDoctor] = useState({ id: '0', name: 'Иван Иванов' });

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection('appointments').add({
      date: selectedDate.date,
      day: selectedDate.day,
      month: selectedDate.month,
      time: selectedTime.time,
      doctor: selectedDoctor.name,
    });
  };

  return (
    <IonApp>
      <IonPage>
        <DoctorsSlider selectDoctor={(value) => setSelectedDoctor(value)} />
        <div className="dateSliderHeader">
          <b>Возможная дата</b>
          <div className="iconsWrapper">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.61539 17.1429L4.61539 2.85714C4.61539 2.09938 4.93956 1.37265 5.51659 0.836836C6.09363 0.301018 6.87626 -1.90735e-06 7.69231 -1.90735e-06L12.3077 -1.90735e-06C13.1237 -1.90735e-06 13.9064 0.301018 14.4834 0.836836C15.0604 1.37265 15.3846 2.09938 15.3846 2.85714L15.3846 17.1429C15.3846 17.9006 15.0604 18.6273 14.4834 19.1632C13.9064 19.699 13.1237 20 12.3077 20L7.69231 20C6.87626 20 6.09363 19.699 5.51659 19.1632C4.93956 18.6273 4.61539 17.9006 4.61539 17.1429ZM6.15385 17.1429C6.15385 17.5217 6.31594 17.8851 6.60445 18.153C6.89297 18.4209 7.28428 18.5714 7.69231 18.5714L12.3077 18.5714C12.7157 18.5714 13.107 18.4209 13.3956 18.153C13.6841 17.8851 13.8462 17.5217 13.8462 17.1429L13.8462 2.85714C13.8462 2.47826 13.6841 2.1149 13.3956 1.84699C13.107 1.57908 12.7157 1.42857 12.3077 1.42857L7.69231 1.42857C7.28428 1.42857 6.89297 1.57908 6.60445 1.84699C6.31594 2.1149 6.15385 2.47826 6.15385 2.85714L6.15385 17.1429ZM0.769231 20C0.565218 20 0.369561 19.9247 0.225302 19.7908C0.0810437 19.6568 0 19.4752 0 19.2857L0 0.714283C0 0.524841 0.0810437 0.343161 0.225302 0.209206C0.369561 0.0752506 0.565218 -1.90735e-06 0.769231 -1.90735e-06C0.973244 -1.90735e-06 1.1689 0.0752506 1.31316 0.209206C1.45742 0.343161 1.53846 0.524841 1.53846 0.714283L1.53846 19.2857C1.53846 19.4752 1.45742 19.6568 1.31316 19.7908C1.1689 19.9247 0.973244 20 0.769231 20ZM19.2308 20C19.0268 20 18.8311 19.9247 18.6868 19.7908C18.5426 19.6568 18.4615 19.4752 18.4615 19.2857L18.4615 0.714283C18.4615 0.524841 18.5426 0.343161 18.6868 0.209206C18.8311 0.0752506 19.0268 -1.90735e-06 19.2308 -1.90735e-06C19.4348 -1.90735e-06 19.6304 0.0752506 19.7747 0.209206C19.919 0.343161 20 0.524841 20 0.714283L20 19.2857C20 19.4752 19.919 19.6568 19.7747 19.7908C19.6304 19.9247 19.4348 20 19.2308 20Z"
                fill="#33BDE4"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.81694 2.18306C6.69973 2.06585 6.54076 2 6.375 2C6.20924 2 6.05027 2.06585 5.93306 2.18306C5.81585 2.30027 5.75 2.45924 5.75 2.625V3.25H4.5C3.83696 3.25 3.20107 3.51339 2.73223 3.98223C2.26339 4.45107 2 5.08696 2 5.75V19.5C2 20.163 2.26339 20.7989 2.73223 21.2678C3.20107 21.7366 3.83696 22 4.5 22H19.5C20.163 22 20.7989 21.7366 21.2678 21.2678C21.7366 20.7989 22 20.163 22 19.5V5.75C22 5.08696 21.7366 4.45107 21.2678 3.98223C20.7989 3.51339 20.163 3.25 19.5 3.25H18.25V2.625C18.25 2.45924 18.1842 2.30027 18.0669 2.18306C17.9497 2.06585 17.7908 2 17.625 2C17.4592 2 17.3003 2.06585 17.1831 2.18306C17.0658 2.30027 17 2.45924 17 2.625V3.25H7V2.625C7 2.45924 6.93415 2.30027 6.81694 2.18306ZM3.25 13.25L3.25 7H20.75V19.5C20.75 19.8315 20.6183 20.1495 20.3839 20.3839C20.1495 20.6183 19.8315 20.75 19.5 20.75H4.5C4.16848 20.75 3.85054 20.6183 3.61612 20.3839C3.3817 20.1495 3.25 19.8315 3.25 19.5L3.25 15.75H8.25C8.58152 15.75 8.89946 15.6183 9.13388 15.3839C9.3683 15.1495 9.5 14.8315 9.5 14.5C9.5 14.1685 9.3683 13.8505 9.13388 13.6161C8.89946 13.3817 8.58152 13.25 8.25 13.25H3.25ZM13.6161 9.86612C13.3817 10.1005 13.25 10.4185 13.25 10.75C13.25 11.0815 13.3817 11.3995 13.6161 11.6339C13.8505 11.8683 14.1685 12 14.5 12H20.75V9.5H14.5C14.1685 9.5 13.8505 9.6317 13.6161 9.86612Z"
                fill="#C1C1C1"
              />
            </svg>
          </div>
        </div>
        {selectedDoctor?.id === '0' && (
          <DateSlider dates={date0} selectDate={(value) => setSelectedDate(value)} />
        )}
        {selectedDoctor?.id === '1' && (
          <DateSlider dates={date1} selectDate={(value) => setSelectedDate(value)} />
        )}
        <b>Возможное время</b>

        {selectedDoctor?.id === '0' && (
          <TimeSlider times={times0} selectTime={(value) => setSelectedTime(value)} />
        )}
        {selectedDoctor?.id === '1' && (
          <TimeSlider times={times1} selectTime={(value) => setSelectedTime(value)} />
        )}
        <div className="makeAnAppointment">
          <div className="dateTime">
            <div className="dateData">
              <span>Дата</span>
              <span>
                <b>
                  {selectedDate?.date} {selectedDate?.month}
                </b>
              </span>
            </div>
            <div className="divider"></div>
            <div className="timeData">
              <span>Время</span>
              <span>
                <b>{selectedTime?.time}</b>
              </span>
            </div>
          </div>
          <IonButton className="sudmitBtn" color="secondary" expand="full" onClick={onCreate}>
            ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
          </IonButton>
        </div>
      </IonPage>
    </IonApp>
  );
};

export default App;
