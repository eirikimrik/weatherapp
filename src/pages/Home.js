import React from "react";
import "./Home.css";

function Home() {
    return(
        <div className="wrapping">
            <div className="content" >
                <div className="locationContainer">
                    <h1>Ålesund</h1>

                </div>
                <div className="currentWeatherContainer">
                    <h3>weather logo</h3>
                </div>
                <div className="upcomingWeatherContainer">
                    <p>MON</p>
                    <p>TUE</p>
                    <p>WED</p>
                    <p>THU</p>
                    <p>FRI</p>
                    <p>SAT</p>
                    <p>SUN</p>

                </div>
               
                

            </div>
            
        </div>
    );
}

export default Home;
