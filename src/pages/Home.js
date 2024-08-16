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
                    <p>date/day</p>
                    <h3>weather logo</h3>
                    <p>degrees</p>
                </div>
                <div className="upcomingWeatherContainer">
                    <div className="mondaycontainer">
                        <p>MON</p>
                        <h3>logo</h3>
                        <p>degrees</p>
                    </div>
                    <div className="tuesdaycontainer">
                        <p>TUE</p>
                        <h3>logo</h3>
                        <p>degrees</p>
                    </div>
                    <div className="wednesdaycontainer">
                        <p>WED</p>
                        <h3>logo</h3>
                        <p>degrees</p>
                    </div>
                    <div className="thursdaycontainer">
                        <p>THU</p>
                        <h3>logo</h3>
                        <p>degrees</p>
                    </div>
                    <div className="fridaycontainer">
                        <p>FRI</p>
                        <h3>logo</h3>
                        <p>degrees</p>
                    </div>
                    <div className="saturdaycontainer">
                        <p>SAT</p>
                        <h3>logo</h3>
                        <p>degrees</p>
                    </div>
                    <div className="sundaycontainer">
                        <p>SUN</p>
                        <h3>logo</h3>
                        <p>degrees</p>
                    </div>

                </div>

                <div className="lastVisited">
                    <h3>Last visited</h3>
                    <div className="lastVisitedContainer">
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
