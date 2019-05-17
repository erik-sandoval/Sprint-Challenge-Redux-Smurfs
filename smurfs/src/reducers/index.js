import { combineReducers } from 'redux'

import { addReducer } from './addReducer'
import { getReducer } from './getReducer'

const rootReducer = combineReducers({
  getSmurfs: getReducer,
  addSmurfs: addReducer,
})

export default rootReducer