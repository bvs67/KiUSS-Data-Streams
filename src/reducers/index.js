import { combineReducers } from 'redux'
import { objReducer } from './obj'
import { usersReducer } from './users'
import { historyReducer } from './history'

export const rootReducer = combineReducers({
   obj: objReducer,
   users: usersReducer,
   history: historyReducer,
})
