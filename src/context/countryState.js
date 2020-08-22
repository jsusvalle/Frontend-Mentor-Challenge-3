import React, {useReducer} from 'react';
import axios from 'axios';

import countryReducer from './countryReducer';
import countryContext from './countryContext';

import { 
    THEME_COLOR,
    SAVE_ALL_COUNTRIES_API, 
    SEARCH_COUNTRY_NAME,
    SEARCH_COUNTRY_RESULTS,
    SEARCH_COUNTRY_BY_REGION
} from '../types';

const CountryState = props => {

    const initialstate = {
        themeColor: false,
        countriesAll: [],
        countriesSearch: []
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

    const searchCountryByRegion = region => {
        dispatch({
            type: SEARCH_COUNTRY_BY_REGION,
            payload: region
        })
    }

    const changeThemeColor = StateTheme => {
        dispatch({
            type: THEME_COLOR,
            payload: StateTheme
        })
    }

    return (
        <countryContext.Provider
            value={{
                themeColor: state.themeColor,
                countriesSearch: state.countriesSearch,
                countriesAll: state.countriesAll,
                saveCountriesApi,
                searchCountryByName,
                searchCountryByRegion,
                changeThemeColor
            }}
        >
            {props.children}
        </countryContext.Provider>
    )
}

export default CountryState;