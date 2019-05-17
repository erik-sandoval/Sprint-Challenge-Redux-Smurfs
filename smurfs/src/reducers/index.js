import {
  FETCHING_SMURFS, FETCHING_SUCCESSFUL, FETCHING_FAILED,
  ADDING_SMURFS, ADD_SUCCESSFUL, ADD_FAILED
} from '../actions'


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

export default reducer