import React, { Component } from 'react'

export class Character extends Component {
  
  render() {
    const {name, height, mass, birth_year} = this.props.character;
    return (
      <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Birth Year: {birth_year}</p>
      </div>
    )
  }
}

export default Character
