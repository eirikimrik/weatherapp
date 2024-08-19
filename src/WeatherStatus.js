import React from 'react';
import { WiDaySunny, WiRain, WiSnow, WiDayCloudy, WiDayFog, WiDaySleet, WiDayStormShowers } from 'react-icons/wi';

function WeatherStatus( {weather, iconSize} ) {
    
    let IconComponent;

    switch (weather) {
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
    

    return <IconComponent size={iconSize} />;

}


export default WeatherStatus;
