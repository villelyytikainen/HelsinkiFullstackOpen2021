import Country from './Country';

const Countries = ({ filteredCountries,handleCountryChange, countryInfo, weatherData }) => {

    if(filteredCountries.length === 1){
        handleCountryChange(filteredCountries[0])
        return(
            <Country key={filteredCountries[0].area} country={filteredCountries[0]} weatherData={weatherData} />
        )
    }
    else if(filteredCountries.length <= 10){
        return(
            <ul>
                {filteredCountries.map(country => {
                    if(filteredCountries.length > 1){
                        return (
                                <li key={country.area}>
                                    <span>{country.name.common}</span>
                                    <button onClick={() => countryInfo(country)}>show</button>
                                </li>
                        )
                    }
                    
                })}
            </ul>
        )
    }
    
}

export default Countries;