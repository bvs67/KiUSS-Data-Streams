import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

//export const unsubscribe = store.subscribe(() => {
     // console.log(store.getState().history.CurrentObj)
//     store.getState().history.CurrentObj = store.getState().obj.CurrentRow
     // store.dispatch (type: GET_HIST_REQUEST,payload: history.CurrentObj,)
     // console.log(store.getState().history.CurrentObj)
//   }
// )
