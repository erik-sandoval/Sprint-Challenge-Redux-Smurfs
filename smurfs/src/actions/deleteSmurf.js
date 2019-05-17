import axios from 'axios'

export const DEL_SMURFS = 'FETCHING_SMURFS'
export const DEL_SUCCESSFUL = 'FETCHING_SUCCESSFUL'
export const DEL_FAILED = 'FETCHING_FAILED'

export const deleteSmurf = smurf => dispatch => {
    dispatch({ type: DEL_SMURFS })
    return axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(res => {
            dispatch({ type: DEL_SUCCESSFUL, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: DEL_FAILED, payload: err })
        })
}