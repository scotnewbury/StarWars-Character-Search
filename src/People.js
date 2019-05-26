import React, { Component } from 'react'
import Character from './Character'

export class People extends Component {
  render() {
    return this.props.people.map((character) => (
      <Character character = {character} />
    ))
  }
}

export default People
