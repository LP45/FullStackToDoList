import React, { Component } from 'react';
import clearSky from '../Images/clearSky.jpg';
import Clouds from '../Images/Clouds.jpg';
import rain from '../Images/rain.jpg';
import snow from '../Images/snow.jpg';
import sun from '../Images/sun.jpg';
import "../App.css"
const lat = 42.361145
const lon = -71.057083

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const api = "da6e6c86218ce008759316044bf839e6"


class Weather extends Component {
    state = {
        data: '',
        days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    }
    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.data.daily)
        const renderData = this.state.data ?  this.state.data.daily.slice(1,8).map((day,index) => {
            console.log("We are in Weather" , day)
            let img;
            let weather = day.weather[0].main
            console.log("Amost there " ,weather)

            if (weather =="Clouds") {
                img = Clouds;
            } 
            else if(weather =="Sunny") {
                img = sun;
                
            }
            else if(weather =="Rain") {
                img = rain
                
            }
            else if(weather =="Clear") {
                img = clearSky
            }
            else if(weather =="Snow") {
                img = snow; 
            }
            console.log(img)
            return (
                <div id="weather" key={index}>
                    
                    
                <div><h3>{this.state.days[index]}</h3>: {day.weather[0].main}</div>
                <div><img className="images" src={img}/></div>
                
                
                </div>
            )
        }):null
        return (

            <div className="container3">
                
                {renderData}
            </div>
        );
    }
}


export default Weather;