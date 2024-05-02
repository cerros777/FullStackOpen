import React, {useState, useEffect} from 'react'
import axios from 'axios'

const WeatherInfo = ({country}) => {
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState('');

    useEffect (() => {
        const  getWeatherData = async () =>{
            try {
                //make a request to the weather API
                const  response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${country.latlng[0]}&longitude=${country.latlng[1]}&current=temperature_2m,wind_speed_10m`)
                const data = response.data
                console.log(data);
                setWeatherData(data);
                console.log(weatherData);
            } catch (err) {
                console.log(err);
                setError("Weather info not available. Please try again later")
            }
        }
        getWeatherData();
    }, [country]) 
  return (
    <div>
        <h2>Weather in {country.name.common}:</h2>
        { weatherData && weatherData.current ? (
            <p>temperature is {weatherData.current.temperature_2m} Celcius
            <br/>wind speed is {weatherData.current.wind_speed_10m} km/h
            </p>
            
        ):(
            <p>loading weather info</p>
        )}
        { error && <p>{error}</p>}
    </div>
  )
}

export default WeatherInfo