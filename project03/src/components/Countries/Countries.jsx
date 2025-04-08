import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([]);

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedCountriesFlag = (flag) => {
        const newVisitedCountriesFlag = [...visitedCountriesFlag, flag];
        setVisitedCountriesFlag(newVisitedCountriesFlag);
    }

    return (
        <>
            <h1>In This API {countries.length} Countries are Available</h1>
            <h3>Traveled by Me: {visitedCountries.length}</h3>
            <div>
                {
                    visitedCountriesFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedCountriesFlag={handleVisitedCountriesFlag}></Country>)
            }
        </div>
        </>
    );
};

export default Countries;