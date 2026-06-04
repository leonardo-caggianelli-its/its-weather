import { IonButton, IonContent, IonHeader, IonPage, IonSearchbar, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import './Search.css';
import WeatherCard from '../components/WeatherCard';
import { OpenweatherWeather, WeatherProps } from '../interfaces/weather.interface';
import { useRef, useState, useEffect } from 'react';
import { getCoordinates, getWeather } from '../services/weather.service';

const Search: React.FC = () => {
  let timer: number;
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<OpenweatherWeather>();

  const fetchWeather = async () => {
    try {
      const coords = await getCoordinates(city);
      console.log(coords);
      if (coords.length === 0 || !coords[0].lat || !coords[0].lon) throw new Error('No coordinates');
      const weather = await getWeather(coords[0].lat, coords[0].lon);
      console.log(weather);
      setWeather(weather);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Esempio di "debounce"
   */
  // const search = (city: string | null | undefined) => {
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   console.log(city);
    // }, 2000);
  // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='weather-search'>
          <IonSearchbar placeholder="Roma" onIonInput={(e) => setCity(e.detail.value ? e.detail.value : '')}></IonSearchbar>
          <IonButton onClick={fetchWeather}>Search</IonButton>
        </div>

        {weather ? <WeatherCard {...weather} /> : <p>Scrivi la città di cui vedere il meteo.</p>}

      </IonContent>
    </IonPage>
  );
};

export default Search;
