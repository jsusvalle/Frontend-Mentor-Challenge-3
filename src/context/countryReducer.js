import {
    THEME_COLOR, 
    SAVE_ALL_COUNTRIES_API, 
    SEARCH_COUNTRY_NAME,
    SEARCH_COUNTRY_RESULTS,
    SEARCH_COUNTRY_BY_REGION
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case THEME_COLOR:
            return {
                ...state,
                themeColor: action.payload
            }
        case SAVE_ALL_COUNTRIES_API:
            return {
                ...state,
                countriesAll: action.payload
            }
        case SEARCH_COUNTRY_RESULTS:
            return {
                ...state,
                countriesSearch: action.payload
            }
        case SEARCH_COUNTRY_NAME:
            let text = action.payload.toLowerCase();
            return {
                ...state,
                countriesSearch: state.countriesAll.filter(country => country.name.toLowerCase().indexOf(text) !== -1)
            }
        case SEARCH_COUNTRY_BY_REGION:
            return {
                ...state,
                countriesSearch: state.countriesAll.filter(country => country.region.indexOf(action.payload) !== -1)
            }
        default:
            return state;
    }
}