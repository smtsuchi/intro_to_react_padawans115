import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div>
        <h1>
            {this.props.title}
        </h1>
        <h2>
            {this.props.author}
        </h2>
        
      </div>
    )
  }
}
