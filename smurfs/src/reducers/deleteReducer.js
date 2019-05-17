import {DEL_SMURFS, DEL_SUCCESSFUL, DEL_FAILED} from '../actions'

const initialState = {
    smurfs: [],
    error: null,
}

export const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEL_SMURFS:
            return {
                ...state,
                error: null
            }
        case DEL_SUCCESSFUL:
            return {
                ...state,
                smurfs: action.payload,
                error: null
            }
        case DEL_FAILED:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}