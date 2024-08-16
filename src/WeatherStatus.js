import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';

const WeatherStatus = ({ weather }) => {
    let IconComponent;

    switch (weather) {
        case 'sunny':
            IconComponent = WiDaySunny;
            break;
        case 'cloudy':
            IconComponent = WiCloudy;
            break;
        case 'rainy':
            IconComponent = WiRain;
            break;
        case 'snowy':
            IconComponent = WiSnow;
            break;
        default:
            IconComponent = WiDaySunny;
    }

    return <IconComponent size={64} />;
};

export default WeatherStatus;