import React, { useState } from 'react'
import WeatherInfo from './WeatherInfo'

const Country = ({country}) => {

  return (
    <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} sq km</p>
        <p>Languages: {Object.values(country.languages).join(', ')}</p>
        <img src={country.flags.png} alt={`${country.name} Flag`} />
        <WeatherInfo country={country} />
    </div>
  )
}

export default Country