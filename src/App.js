import React, { Component } from 'react';
import People from './People';
import SearchBox from './SearchBox';
// import Header from './Header';
import './App.css';
import axios from 'axios';

export class App extends Component {
  constructor() {
    super();
    this.state= {
      people: [],
      searchField: ''
    }
  }

  componentDidMount () {
    axios.get('https://swapi.co/api/people')
    .then(starwars => {
      return starwars.data.count
    })
    .then(count => {
      console.log(count)
      for (let i = 1; i <= count; i++) {
        const url = ['https://swapi.co/api/people/' + i]
        axios.get(url)
        .then(res => this.setState({people: [...this.state.people, res.data]}))
      }
    })   
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
      const {people, searchField} = this.state
      const filteredPeople = people.filter(people => {
        return people.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      })
    return !people.length ?
      <h1>Loading . . . </h1> :
      (
        <div className = 'tc'>
          {/* <Header /> */}
          <h1>Star Wars Character Search</h1>
          <SearchBox searchChange = {this.onSearchChange} />
          <People people = {filteredPeople} />
        </div>
      )
  }
}

export default App
