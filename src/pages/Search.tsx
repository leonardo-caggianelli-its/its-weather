import { IonButton, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import './Search.css';
import WeatherCard from '../components/WeatherCard';
import { WeatherProps } from '../interfaces/weather.interface';

const weather: WeatherProps = {
  city: 'Roma', 
  country: '', 
  weather_condition: '', 
  date: '', 
  weather_temperature: 0, 
  weather_wind: 0, 
  weather_feel_temperature: 0, 
  weather_uv: 0, 
  weather_pressure: 0
}

const Search: React.FC = () => {
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
          <IonSearchbar placeholder="Roma"></IonSearchbar>
          <IonButton>Search</IonButton>
        </div>

        <WeatherCard {...weather} />

      </IonContent>
    </IonPage>
  );
};

export default Search;
