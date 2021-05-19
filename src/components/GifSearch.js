import React, { Component } from 'react'

export class GifSearch extends Component {
  state = {
    inputText: ""
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    if(this.state.inputText) {
      this.props.handleSubmitSearchTerm(this.state.inputText)
    }
    this.setState({inputText: ""})
  }
  handleInputChange = (e) => {
    this.setState({inputText: e.target.value})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Enter a search term:</label><br/>
          <input type="text" value={this.state.inputText} onChange={this.handleInputChange} /><br/>
          <button type="submit">Find Gifs</button>
        </form>
      </div>
    )
  }
}

export default GifSearch
