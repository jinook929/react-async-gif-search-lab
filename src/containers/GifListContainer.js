import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const BASE_URL = `https://api.giphy.com/v1/gifs/search?q=`
const API_KEY = `&api_key=4UFVclyms4yPlI0NsFMFPAoB0JCtZIAe&rating=g`

export class GifListContainer extends Component {
  state = {
    gifs: []
  }
  fetchGifs = (keyword = "keyword") => {
    fetch(`${BASE_URL}${keyword}${API_KEY}`).then(res => res.json())
    .then(data => {
      const threeGifs = []
      for(let i = 0; i < 3; i++) {
        threeGifs.push(data.data[i])
      }
      this.setState(state => ({gifs: threeGifs}))
    })    
  }
  handleSubmitSearchTerm = (keyword) => {
    this.fetchGifs(keyword)
  }
  componentDidMount() {
    this.fetchGifs()
  }
  render() {
    return (
      <div className="GifListContainer">
        <ul>
          <GifSearch handleSubmitSearchTerm={this.handleSubmitSearchTerm} />
          <GifList gifs={this.state.gifs} />
        </ul>
      </div>
    )
  }
}

export default GifListContainer
