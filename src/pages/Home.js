import React, { useState, useEffect } from "react";
import WeatherStatus from '../WeatherStatus'; 
import "./Home.css";


const URL = '';



function Home() {

    const [temp, setTemp] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                setTemp(json.current.temp_f)
            })
        }
        fetchData();
    }, [])


    const currentWeather = 'sunny';
    const upcomingWeather = {
        monday: 'rainy',
        tuesday: 'snowy',
        wednesday: 'cloudy',
        thursday: 'sunny',
        friday: 'rainy',
        saturday: 'snowy',
        sunday: 'cloudy'
    };


    return(
        <div className="wrapping">
            <div className="content" >
                <div className="locationContainer">
                    <h1>Ålesund</h1>
                </div>
                <div className="currentWeatherContainer">
                    <p>date/day</p>
                    <WeatherStatus weather={currentWeather} />
                    
                    <p>degrees</p>
                </div>
                <div className="upcomingWeatherContainer">
                    <div className="mondaycontainer">
                        <p>MON</p>
                        <WeatherStatus weather={upcomingWeather.monday} />
                        <p>degrees</p>
                    </div>
                    <div className="tuesdaycontainer">
                        <p>TUE</p>
                        <WeatherStatus weather={upcomingWeather.tuesday} />
                        <p>degrees</p>
                    </div>
                    <div className="wednesdaycontainer">
                        <p>WED</p>
                        <WeatherStatus weather={upcomingWeather.wednesday} />
                        <p>degrees</p>
                    </div>
                    <div className="thursdaycontainer">
                        <p>THU</p>
                        <WeatherStatus weather={upcomingWeather.thursday} />
                        <p>degrees</p>
                    </div>
                    <div className="fridaycontainer">
                        <p>FRI</p>
                        <WeatherStatus weather={upcomingWeather.friday} />
                        <p>degrees</p>
                    </div>
                    <div className="saturdaycontainer">
                        <p>SAT</p>
                        <WeatherStatus weather={upcomingWeather.saturday} />
                        <p>degrees</p>
                    </div>
                    <div className="sundaycontainer">
                        <p>SUN</p>
                        <WeatherStatus weather={upcomingWeather.sunday} />
                        <p>degrees</p>
                    </div>
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


