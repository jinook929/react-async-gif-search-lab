import React from 'react'
import GifListContainer from '../containers/GifListContainer'

import NavBar from './NavBar'
import GifSearch from './GifSearch'

// the App component should render out the GifListContainer component 
class App extends React.Component {
  state = {
    gifs: []
  }
  fetchGifs = (keyword) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=4UFVclyms4yPlI0NsFMFPAoB0JCtZIAe&rating=g`)
    .then(res => res.json())
    .then(data => {
      const threeGifs = []
      for(let i = 0; i < 3; i++) {
        threeGifs.push(data.data[i])
      }
      this.setState({gifs: threeGifs})
    })    
  }
  handleSubmitSearchTerm = (searchTerm) => {
    this.fetchGifs(searchTerm)
  }
  render() {
    return (
      <div>
          <NavBar color='black' title="Giphy Search" />
          <GifSearch handleSubmitSearchTerm={this.handleSubmitSearchTerm} />
          <GifListContainer gifs={this.state.gifs} fetchGifs={this.fetchGifs} />
      </div>
    )
  }
}

export default App
