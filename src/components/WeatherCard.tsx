import { IonCard, IonCardContent, IonText, IonIcon } from '@ionic/react';
import { leafOutline, thermometerOutline, sunnyOutline, pulseOutline } from 'ionicons/icons';
import './WeatherCard.css';
import { OpenweatherWeather } from '../interfaces/weather.interface';

const WeatherCard: React.FC<OpenweatherWeather> = (props: OpenweatherWeather) => {
  return (
    <IonCard className='weather-card'>
      <IonCardContent>

        <h4 className='ion-text-center ion-margin ion-padding weather-location'>
          <IonText color="primary">{props.name}</IonText>, {props.sys.country}
        </h4>

        <div className='ion-text-center ion-margin ion-padding'>
          <img src="/rain.png" width="75" height="75" />
          {props.weather ? props.weather.map((weather: {main: string; description: string}) => (
            <h4 className='ion-text-center ion-no-margin weather-condition'>{weather.main}</h4>
          )) : <p>Nessun meteo</p>}
          <p>{props.date}</p>
          <p className='weather-temperature'>{props.main.temp} °C</p>
        </div>

        <div className='weather-details'>
          <div className='weather-wind'>
            <IonIcon aria-hidden="true" icon={leafOutline} />
            <div>
              <p>Wind</p>
              <p>{props.wind.speed} km/h</p>
            </div>
          </div>
          <div className='weather-feels'>
            <IonIcon aria-hidden="true" icon={thermometerOutline} />
            <div>
              <p>Feels like</p>
              <p>{props.main.feels_like} °C</p>
            </div>
          </div>
          <div className='weather-uv'>
            <IonIcon aria-hidden="true" icon={sunnyOutline} />
            <div>
              <p>Humidity</p>
              <p>{props.main.humidity}%</p>
            </div>
          </div>
          <div className='weather-pressure'>
            <IonIcon aria-hidden="true" icon={pulseOutline} />
            <div>
              <p>Pressure</p>
              <p>{props.main.pressure}mbar</p>
            </div>
          </div>
        </div>

      </IonCardContent>
    </IonCard>
  );
};

export default WeatherCard;
