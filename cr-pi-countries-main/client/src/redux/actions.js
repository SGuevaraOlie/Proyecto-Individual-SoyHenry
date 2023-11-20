// Types
import {
    GET_COUNTRIES,
    SEARCH_COUNTRIES,
    SET_CURRENT_PAGE,
    RESET_COUNTRIES,
    FILTER_COUNTRIES_BY_CONTINENT,
    FILTER_COUNTRIES_BY_ACTIVITY,
    SORT_COUNTRIES_BY_NAME_ASCENDING,
    SORT_COUNTRIES_BY_NAME_DESCENDING,
    SORT_COUNTRIES_BY_POPULATION_ASCENDING,
    SORT_COUNTRIES_BY_POPULATION_DESCENDING
} from './actionTypes';
// Axios
import axios from 'axios';

export const getCountries = () => {
    return async (dispatch) => {
        try {
            const countries = await axios.get("http://localhost:3001/countries");
            dispatch({
                type: GET_COUNTRIES,
                payload: countries.data
            });
        } catch (error) {
            console.error("Error al obtener los países:", error);
        }
    }
}

export const searchCountries = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/country?name=${name}`);
            if (response.data.length === 0){
                window.alert(`No se encontró ningún país con el nombre ${name}`)
            } else {
                dispatch({
                    type: SEARCH_COUNTRIES,
                    payload: response.data
                })
            }
        } catch (error) {
            console.error(`Error al buscar países bajo el nombre ${name}:`, error);
        }
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    }
}

export const resetCountries = () => {
    return {
        type: RESET_COUNTRIES,
    }
}

export const filterCountriesByContinent = (continent) => {
    return (dispatch, getState) => {
        const allCountries = getState().allCountries;
        const filteredCountries = 
            continent === "all"
            ? allCountries
            : allCountries.filter((country) => country.continente === continent);
        dispatch({
            type: FILTER_COUNTRIES_BY_CONTINENT,
            payload: filteredCountries,
        })
    }
}

export const filterCountriesByActivity = (activity) => {
    return (dispatch, getState) => {
        const allCountries = getState().allCountries;
        const filteredCountries = 
            activity === "all"
            ? allCountries
            : allCountries.filter((country) => country.Activities.some((act) => act.Nombre === activity));
        dispatch({
            type: FILTER_COUNTRIES_BY_ACTIVITY,
            payload: filteredCountries,
        })
    }
}

export const sortCountriesByNameAscending = () => {
    return {
        type: SORT_COUNTRIES_BY_NAME_ASCENDING,
    };
};

export const sortCountriesByNameDescending = () => {
    return {
        type: SORT_COUNTRIES_BY_NAME_DESCENDING,
    };
};

export const sortCountriesByPopulationAscending = () => {
    return {
        type: SORT_COUNTRIES_BY_POPULATION_ASCENDING,
    };
};

export const sortCountriesByPopulationDescending = () => {
    return {
        type: SORT_COUNTRIES_BY_POPULATION_DESCENDING,
    };
};