import axios from 'axios'

export const ADDING_SMURFS = 'FETCHING_SMURFS'
export const ADD_SUCCESSFUL = 'FETCHING_SUCCESSFUL'
export const ADD_FAILED = 'FETCHING_FAILED'

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADDING_SMURFS })
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: ADD_SUCCESSFUL, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_FAILED, payload: err.data })
        })
}