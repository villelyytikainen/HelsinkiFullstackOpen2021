import Weather from './Weather';

const Country = ({country, weatherData}) => {
    console.log(weatherData)
    const languages = Object.keys(country.languages);

    return(
        <li key={country.name.common}>
            <h1>{country.name.common}</h1>
            <img src={country.flags.svg} alt="country flag" width="200px"/>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h4>Languages:</h4>
            <ul>
                {languages.map(lang => (
                    <li key={lang}>{lang}</li>
                ))}
            </ul>
            <h4>Weather in {country.capital}</h4>
            <Weather weatherData={weatherData} />
            
        </li>
    )

}

export default Country;