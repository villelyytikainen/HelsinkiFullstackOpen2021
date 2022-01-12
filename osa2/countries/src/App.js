import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [weatherData, setWeatherData] = useState([])
  const [capital, setCapital] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const data = response.data;
      setCountries(data)
    }
    fetchData();
  },[]);

  const countryInfo = (country) => {
    setFiltered(countries.filter(c => {
      if(c === country){
        return country
      }
    }));
  }
  useEffect(() => {
      const OPENWEATHER_KEY = process.env.REACT_APP_OPENWEATHER_KEY;
      if(filtered.length === 1){
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${OPENWEATHER_KEY}`)
               .then(response => setWeatherData(response.data))
        }
        console.log('haetaan säätä')
  }, [capital])


  const handleSearch = (event) => {
    setFiltered(countries.filter(country =>{
      return country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    }))
  }

  const handleCountryChange = (country) => {
    setCapital(country.capital)
    console.log(capital)
  };

  return (
    <div className="App">
      <input type="text" name="countryFilter" onChange={handleSearch} />
      {filtered.length > 10 ? 
        <div><p>Too many matches</p></div> : 
        <Countries filteredCountries={filtered} handleCountryChange={handleCountryChange} countryInfo={countryInfo} weatherData={weatherData}/>}
    </div>
  );
}

export default App;
