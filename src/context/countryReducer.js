import { SAVE_ALL_COUNTRIES_API, 
    SEARCH_COUNTRY_NAME,
    SEARCH_COUNTRY_RESULTS,
    SELECT_COUNTRY_INFO
} from '../types';

export default (state, action) => {
    switch(action.type) {
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
            return {
                ...state,
                countriesSearch: state.countriesAll.filter(country => country.name === action.payload)
            }
        case SELECT_COUNTRY_INFO:
            return {
                ...state,
                countrySelect: action.payload
            }
        default:
            return state;
    }
}