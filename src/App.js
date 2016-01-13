import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeSearchQuery, fetchGifs, selectGif } from './actions'

import Modal from 'react-modal'

const GifList = ({ data, onSelect }) =>
  <div style={{marginTop: 10}}>
    {
      data.map(gif =>
        <a href="#" key={gif.id}>
          <img
            src={gif.images.fixed_height.url}
            onClick={() => onSelect(gif)} />
        </a>
      )
    }
  </div>

export class App extends Component {
  _handleFormSubmit(e) {
    e.preventDefault()
    const text = this.refs.input.value
    if (text) {
      this.props.dispatch(fetchGifs(text))
    }
  }

  render() {
    const { dispatch, loading, gifs, selectedGif } = this.props

    const content = loading ?
      <p>loading...</p> :
      <GifList
        data={gifs}
        onSelect={(o) => dispatch(selectGif(o))} />
    const selectedGifUrl = selectedGif ? selectedGif.images.original.url : ''

    return (
      <div>
        <form onSubmit={this._handleFormSubmit.bind(this)}>
          <input
              ref="input"
              placeholder="Search giphy..." />
        </form>
        { content }
        <Modal
          isOpen={selectedGif ? true : false}
          onRequestClose={() => dispatch(selectGif(null))}>
          <img src={selectedGifUrl} />
          <p>
            <a href={selectedGifUrl}>{selectedGifUrl}</a>
          </p>
        </Modal>
      </div>
    )
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  gifs: PropTypes.array.isRequired,
  selectedGif: PropTypes.object
}

function select (state) {
  return state
}

export default connect(select)(App)
