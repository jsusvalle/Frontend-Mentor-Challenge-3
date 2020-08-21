import React, {useReducer} from 'react';
import axios from 'axios';

import countryReducer from './countryReducer';
import countryContext from './countryContext';

import { SAVE_ALL_COUNTRIES_API, 
        SEARCH_COUNTRY_NAME,
        SEARCH_COUNTRY_RESULTS,
        SELECT_COUNTRY_INFO
} from '../types';

const CountryState = props => {

    const initialstate = {
        countriesAll: [],
        countriesSearch: [],
        countrySelect: null
    }

    const [state, dispatch] = useReducer(countryReducer, initialstate);

    const saveCountriesApi = async () => {
        const result = await axios.get('https://restcountries.eu/rest/v2/all');
        saveInTheSearchCountry(result.data)
        dispatch({
            type: SAVE_ALL_COUNTRIES_API,
            payload: result.data
        })
    }

    const saveInTheSearchCountry = countries => {
        dispatch({
            type: SEARCH_COUNTRY_RESULTS,
            payload: countries
        })
    }

    const searchCountryByName = name => {
        dispatch({
            type: SEARCH_COUNTRY_NAME,
            payload: name
        })
    }

    const selectInfoCountry = countryInfo => {
        dispatch({
            type: SELECT_COUNTRY_INFO,
            payload: countryInfo
        })
    }

    return (
        <countryContext.Provider
            value={{
                countriesSearch: state.countriesSearch,
                countriesAll: state.countriesAll,
                saveCountriesApi,
                searchCountryByName,
                selectInfoCountry
            }}
        >
            {props.children}
        </countryContext.Provider>
    )
}

export default CountryState;