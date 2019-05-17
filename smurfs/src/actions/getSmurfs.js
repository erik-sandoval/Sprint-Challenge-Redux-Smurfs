import axios from 'axios'

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const FETCHING_SUCCESSFUL = 'FETCHING_SUCCESSFUL'
export const FETCHING_FAILED = 'FETCHING_FAILED'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS })
  return axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCHING_SUCCESSFUL, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAILED, payload: err })
    })
}