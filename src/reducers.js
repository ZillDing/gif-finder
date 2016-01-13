import { combineReducers } from 'redux'
import { FETCH_GIFS, SET_GIFS, SELECT_GIF } from './actions'

function loading (state = false, action) {
  switch (action.type) {
    case FETCH_GIFS:
      return true
    case SET_GIFS:
      return false
    default:
      return state
  }
}

function gifs (state = [], action) {
  switch (action.type) {
    case SET_GIFS:
      return action.data
    default:
      return state
  }
}

function selectedGif (state = null, action) {
  switch (action.type) {
    case SELECT_GIF:
      return action.data
    default:
      return state
  }
}

const app = combineReducers({
  loading,
  gifs,
  selectedGif
})

export default app
