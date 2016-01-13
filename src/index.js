import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import App from './App'
import app from './reducers'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore)
const store = createStoreWithMiddleware(app)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
