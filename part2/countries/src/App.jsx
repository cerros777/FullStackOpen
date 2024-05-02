import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';

function App() {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await axios.get('https://studies.cs.helsinki.fi/restcountries/api/all');
        const data = response.data;
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchAllCountries();
  }, []);

  useEffect(() => {
    // Filter countries based on query
    if (query.trim() === '') {
      setFilteredCountries(countries);
      setSelectedCountry(null)
    } else {
      const filtered = countries.filter(country =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [query, countries]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country)
  }

  return (
    <div>
      <p>find countries: <input
        type="text"
        value={query}
        onChange={handleInputChange}
      /> </p> 
      
      {error && <p>{error}</p>}
      <div>
        {filteredCountries.length === 1 && (
          <div>
            <Country country={filteredCountries[0]} />
          </div>
        )}
        {filteredCountries.length > 1 && filteredCountries.length <= 10 && (
          <ul>
            {filteredCountries.map(country => (
              <li key={country.name.common}>
                {country.name.common}
                <button onClick={() => selectCountry(country)}>View</button>
              </li>
            ))}
          </ul>
        )}
        {filteredCountries.length > 10 && query.trim()  !== '' && (
        <p>Too many countries found. Please make your query more specific.</p>
      )}
      {selectedCountry && filteredCountries.length !== 1 && (
        <div>
          <Country country={selectedCountry} />
        </div>  
      )}
      </div>
    </div>
  );
}

export default App;
