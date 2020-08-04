import React, { Component } from 'react';
import Pages from './containers/Pages'
import './App.css';

class App extends Component {

  state = {
    civilizations: [],
    structures: null,
    technologies: null,
    units: null,
    searchTerm: null
  }



  getApiData = (urlParameter) => {
    return (
      fetch(`https://us-central1-api-of-empires-ii.cloudfunctions.net/rogan/api/${urlParameter}`)
        .then(response => response)
        .then(response => response.json())
        .then((data) => {
          return (
            urlParameter === 'civilizations' ? this.setState({ civilizations: data.civilizations })
              : urlParameter === 'structures' ? this.setState({ structures: data.structures })
                : urlParameter === 'technologies' ? this.setState({ technologies: data.technologies })
                  : this.setState({ units: data.units })
          )
        })
        .catch(error => console.log(error))
    );
  }


  render() {
    const { civilizations, structures, technologies, units, searchTerm } = this.state;
    return (
      <Pages
        getApiData={this.getApiData}
        civilizations={civilizations}
        structures={structures}
        technologies={technologies}
        units={units}
        searchTerm={searchTerm}
      />
    );
  }
}

export default App;