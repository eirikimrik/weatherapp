
import React, {useState, useEffect} from 'react';
import { WiDaySunny, WiRain, WiSnow, WiDayCloudy, WiDayFog, WiDaySleet, WiDayStormShowers } from 'react-icons/wi';


const weatherCodeURL = 'https://api.open-meteo.com/v1/forecast?latitude=62.4723&longitude=6.1549&current=temperature_2m,weather_code&timezone=Europe%2FBerlin';

function WeatherStatus() {

    const [weatherCode, setWeatherCode] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(weatherCodeURL);
            result.json().then(json => {
                setWeatherCode(json.current.weather_code);
            })
        }
        fetchData();
    }, []);

    let IconComponent;

    switch (weatherCode) {
        case 0:
            IconComponent = WiDaySunny;
            break;
        case 1:
        case 2:
        case 3:
            IconComponent = WiDayCloudy;
            break;
        case 45:
        case 48:
            IconComponent = WiDayFog;
            break;
        case 51:
        case 53:
        case 55:
            IconComponent = WiDaySleet;
            break;
        case 61:
        case 63:
        case 65:
            IconComponent = WiRain;
            break;
        case 71:
        case 73:
        case 75:
            IconComponent = WiSnow;
            break;
        case 95:
        case 96:
        case 99:
            IconComponent = WiDayStormShowers;
            break;
        default:
            IconComponent = WiDaySunny;
    }
    

    return <IconComponent size={84} />;

}


export default WeatherStatus;
