import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedCountriesFlag}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // if(visited === true){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country?.flags?.png} alt="" />
            <p>Independent: {country.independent ? 'Independent' : 'Not Independent'}</p>
            <p>Population: {country.population}</p>
            <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => handleVisitedCountriesFlag(country.flags.png)}>Add Flag</button>
        </div>
    );
};

export default Country;