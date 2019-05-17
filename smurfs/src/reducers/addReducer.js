import {
    ADDING_SMURFS, ADD_SUCCESSFUL, ADD_FAILED
} from '../actions'

const initialState = {
    smurfs: [],
    addingSmurf: false,
    error: null
}

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDING_SMURFS:
            return {
                ...state,
                addingSmurf: true,
                error: null
            }
        case ADD_SUCCESSFUL:
            return {
                ...state,
                addingSmurf: false,
                smurfs: action.payload,
                error: null
            }
        case ADD_FAILED:
            return {
                ...state,
                addingSmurf: false,
                error: action.payload,
            }
        default:
            return state
    }
}