import {
    FETCHING_SMURFS, FETCHING_SUCCESSFUL, FETCHING_FAILED,
} from '../actions'

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    error: null
}

export const getReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURFS:
            return {
                ...state,
                fetchingSmurfs: true,
                error: null
            }
        case FETCHING_SUCCESSFUL:
            return {
                ...state,
                fetchingSmurfs: false,
                smurfs: action.payload,
                error: null,
            }
        case FETCHING_FAILED:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload,
            }
        default:
            return state
    }
}