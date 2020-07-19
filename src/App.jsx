import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {

  state = {
    apiData: null,
    civilization: null,
    unit: null,
    building: null,
    taunt: null
  }

  getApiData = (urlParameter) => {
    return (
      fetch(`https://secret-ocean-49799.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/${urlParameter}`)
        .then(response => response)
        .then(response => response.json())
        .then(data => this.setState({ apiData: data.civilizations }))
        .then(response => console.log(response))
        .catch(error => console.log(error))
    );
  }


  render() {
    const { civilization, unit, building, taunt } = this.state;
    return (
      <NavBar getApiData={this.getApiData} civilization={civilization} unit={unit} building={building} taunt={taunt} />
    );
  }
}

export default App;