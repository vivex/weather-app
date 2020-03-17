import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { weather } from '../reducers'

const store = initialState => {
  return createStore(
      weather,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export default store
