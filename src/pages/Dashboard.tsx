import { IonContent, IonHeader, IonPage, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Dashboard.css';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useRef, useState } from 'react';
import { OpenweatherWeather } from '../interfaces/weather.interface';
import { getWeather } from '../services/weather.service';

const Dashboard: React.FC = () => {
  const effectRan = useRef(false);
  const [weather, setWeather] = useState<OpenweatherWeather>();

  const fetchWeather = async () => {
    try {
      const lat = 41.9102088;
      const lon = 12.3711915;
      const weather = await getWeather(lat, lon);
      setWeather(weather);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (effectRan.current === false) fetchWeather();
    return () => { effectRan.current = true };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>

        <p className='ion-text-center'>
          <IonText>Here's your location based weather</IonText>
        </p>

        {weather ? <WeatherCard {...weather} /> : <IonSpinner name="circles"></IonSpinner>}

      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
