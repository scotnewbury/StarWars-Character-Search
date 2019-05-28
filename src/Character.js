import React, { Component } from 'react'
import Homeworld from "./Homeworld";

export class Character extends Component {
  
  render() {
    const {name, height, mass, birth_year, homeworld} = this.props.character;
    return (
      <div className = 'bg-light-yellow dib br4 pa3 ma2 grow bw2 shadow-5 tc'>
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Birth Year: {birth_year}</p>
        <Homeworld homeworld = {homeworld} />
      </div>
    )
  }
}

export default Character
