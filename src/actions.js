import axios from 'axios'

export const FETCH_GIFS = 'FETCH_GIFS'
export function fetchGifs (text) {
  return (dispatch) => {
    dispatch({ type: FETCH_GIFS })

    axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        q: text,
        api_key: 'dc6zaTOxFJmzC'
      }
    }).then(res => {
      console.log(res)
      if (res.status === 200) {
        dispatch(setGifs(res.data.data))
      }
    }).catch(res => {
      console.error(res)
    })
  }
}

export const SET_GIFS = 'SET_GIFS'
function setGifs (data) {
  return { type: SET_GIFS, data }
}

export const SELECT_GIF = 'SELECT_GIF'
export function selectGif (data) {
  return { type: SELECT_GIF, data }
}
