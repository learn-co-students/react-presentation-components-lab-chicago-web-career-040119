// Simple Component will be presentational
// but will have a little bit of state
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
  let newInput = this.state.mood
  if (newInput === "happy") {
    newInput = "sad"
  } else {
    newInput = "happy"
  }
  this.setState({
    mood: newInput
  })
 }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }

}
