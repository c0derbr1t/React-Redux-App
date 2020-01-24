// Action index.js
import axios from 'axios';

export const fetchRestrooms = query => {
    return dispatch => {
        dispatch({ type: "FETCHING_RESTROOMS_START" });
        axios
            .get(`https://www.refugerestrooms.org/api/v1/restrooms/search?query=${query}`)
            .then(res => {
                dispatch({ type: "FETCHING_RESTROOMS_SUCCESS", payload: res.data})
            })
            .catch(err => {
                dispatch({ type: "FETCHING_RESTROOMS_FAILED", payload: err});
            });
    }
}   

export const displayRestrooms = data => {
    return {
        type: "FETCHING_RESTROOMS_SUCCESS",
        payload: data
    };
};

export const errorRestrooms = error => {
    return {
        type: "FETCHING_RESTROOMS_FAILED",
        payload: error
    };
};