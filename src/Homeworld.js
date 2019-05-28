import React, { Component } from 'react'

export class Homeworld extends Component {
  render() {
    return (
    fetch(this.props.homeworld)      
    .then(res => res.json())
    .then(data => {
      return data.name
    })
    )
  }
}

export default Homeworld

