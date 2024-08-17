import React, {useState, useEffect} from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiCloud, WiDayCloudy, WiDayFog, WiDaySleet, WiDayStormShowers } from 'react-icons/wi';


const weatherCodeURL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=weather_code&timezone=Europe%2FBerlin';

function WeatherStatus() {

    const [weatherCode, setWeatherCode] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(weatherCodeURL);
            result.json().then(json => {
                console.log(json);
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
        case 1, 2, 3:
            IconComponent = WiDayCloudy;
            break;
        case 45, 48:
            IconComponent = WiDayFog;
            break;
        case 51, 53, 55:
            IconComponent = WiDaySleet;
            break;
        case 61, 63, 65:
            IconComponent = WiRain;
            break;
        case 71, 73, 75:
            IconComponent = WiSnow;
            break;
        case 95, 96, 99:
            IconComponent = WiDayStormShowers;
            break;
        default:
            IconComponent = WiDaySunny;
    }

    return <IconComponent size={64} />;

}


export default WeatherStatus;