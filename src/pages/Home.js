import React, { useState, useEffect } from "react";
import WeatherStatus from '../WeatherStatus'; 
import "./Home.css";
import UpcomingWeather from "../UpcomingWeather";


//api from open-meteo
const URL = 'https://api.open-meteo.com/v1/forecast?latitude=62.4723&longitude=6.1549&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin';
function Home() {

    const [temp, setTemp] = useState(0);
    const [weatherType, setWeatherType] = useState('');
    const [upComingWeatherCodes, setUpComingWeatherCodes] = useState([]);
    
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentTime = new Date();

    const day = weekDay[currentTime.getDay()];
    const hour = currentTime.getHours() + ':' + currentTime.getMinutes();


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            result.json().then(json => {
                console.log(json);
                setTemp(json.current.temperature_2m);
                setWeatherType(json.current.weather_code);
                setUpComingWeatherCodes(json.daily.weather_code.slice(0, 7));
                
            })
        }
        fetchData();
    }, []);


    return(
        <div className="wrapping">
            <div className="content" >
                <div className="locationContainer">
                    <h1>Ålesund</h1>
                </div>
                <div className="currentWeatherContainer">
                    <p>{day} {hour}</p>
                    <WeatherStatus weather={weatherType} />
                    <p>{temp}C°</p>
                </div>
                <div className="upcomingWeatherContainer">
                {upComingWeatherCodes.map((code, index) => (
                        <div key={index} className={`${weekDay[(currentTime.getDay() + index) % 7].toLowerCase()}container`}>
                            <p>{weekDay[(currentTime.getDay() + index) % 7].toUpperCase().slice(0, 3)}</p>
                            <UpcomingWeather weather={code} />
                            <p>degrees</p>
                        </div>
                    ))}
                </div>
                <div className="lastVisitedContainer">
                    <h3>Last visited</h3>
                    <div className="lastVisitedLocations">
                        <div className="location1">
                            <h3>location1</h3>
                            <p>degrees</p>
                        </div>
                        <div className="location2">
                            <h3>location2</h3>
                            <p>degrees</p>
                        </div>
                        <div className="location3">
                            <h3>location3</h3>
                            <p>degrees</p>
                        </div>
                        <div className="location4">
                            <h3>location4</h3>
                            <p>degrees</p>
                        </div>
                        <div className="location5">
                            <h3>location5</h3>
                            <p>degrees</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;