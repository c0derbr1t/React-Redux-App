// Reducers index.js
const initialState = {
    isLoading: false,
    restrooms: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_RESTROOMS_START":
            return {
                ...state,
                isLoading: true
            };
        case "FETCHING_RESTROOMS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                restrooms: action.payload
            };
        case "FETCHING_RESTROOMS_FAILED":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};