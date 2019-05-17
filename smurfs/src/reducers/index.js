import { FETCHING_SMURFS, FETCHING_SUCCESSFUL, FETCHING_FAILED } from '../actions'


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCHING_SUCCESSFUL:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case FETCHING_FAILED:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer