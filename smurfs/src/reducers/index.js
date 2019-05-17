import { combineReducers } from 'redux'

import { addReducer } from './addReducer'
import { getReducer } from './getReducer'
import { deleteReducer } from './deleteReducer'

const rootReducer = combineReducers({
  getSmurfs: getReducer,
  addSmurfs: addReducer,
  deleteSmurfs: deleteReducer
})

export default rootReducer