import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const CountryContext = createContext();

const CountryProvider = (props) => {

    const [ countriesResult, saveCountriesResult ] = useState({});
    const [ countryname, saveCountryName ] =  useState('all');
    const [ searchcountrybyregion, saveSearchCountryByRegion ] = useState(false);

    useEffect ( () => {
        if(!searchcountrybyregion) {
            if(countryname==='all' || countryname==='') {
                const consultCountriesGeneral = async () => {
                    try {
                        const countries = await axios.get(`https://restcountries.eu/rest/v2/all`);
                        saveCountriesResult(countries.data);
                    } catch (error) {
                        if(error.response) {
                            console.log(error.response)
                        }
                    }
                }
                consultCountriesGeneral();
            } else {
                const consultCountriesByName = async () => {
                    try {
                        const countries = await axios.get(`https://restcountries.eu/rest/v2/name/${countryname}`);
                        saveCountriesResult(countries.data);
                    } catch (error) {
                        if(error.response) {
                            console.log(error.response)
                        }
                    }
                }
                consultCountriesByName();
            }
        } else {
            const consultCountriesByName = async () => {
                try {
                    const countries = await axios.get(`https://restcountries.eu/rest/v2/region/${countryname}`);
                    saveCountriesResult(countries.data);
                } catch (error) {
                    if(error.response) {
                        console.log(error.response)
                    }
                }
            }
            consultCountriesByName();
        }
    }, [countryname]);

    return (
        <CountryContext.Provider
            value={{
                countriesResult,
                saveCountryName,
                saveSearchCountryByRegion
            }}
        > {props.children}
        </CountryContext.Provider>
    )
}

export default CountryProvider;