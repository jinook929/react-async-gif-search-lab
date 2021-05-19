import React, { Component } from 'react'
import GifList from '../components/GifList'

// const BASE_URL = `https://api.giphy.com/v1/gifs/search?q=`
// const API_KEY = `&api_key=4UFVclyms4yPlI0NsFMFPAoB0JCtZIAe&rating=g`

export class GifListContainer extends Component {
  // state = {
  //   gifs: this.props.gifs
  // }
  // fetchGifs = () => {
  //   fetch(`${BASE_URL}${this.props.searchTerm}${API_KEY}`).then(res => res.json())
  //   .then(data => {
  //     const threeGifs = []
  //     for(let i = 0; i < 3; i++) {
  //       threeGifs.push(data.data[i])
  //     }
  //     this.setState(state => ({gifs: threeGifs}))
  //   })    
  // }
  // componentDidMount() {
  //   console.log("GifListContainer componentDidMount")
  //   // this.fetchGifs()
  //   // this.props.fetchGifs()
  // }
  render() {
    return (
      <div className="GifListContainer">
        <ul>
          <GifList gifs={this.props.gifs} />
        </ul>
      </div>
    )
  }
}

export default GifListContainer
