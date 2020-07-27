import React, { Component } from 'react';
import Pages from './containers/Pages'
import './App.css';
import civilizations from './data/aoeiihd.json';

class App extends Component {

  state = {
    civilizations: civilizations,
    structures: null,
    technologies: null,
    units: null,
    searchTerm: null
  }

  // cleanBizantines = (data) => {
  //   const cleanData = [...data.civilizations];
  //   let dirtyData = cleanData[2];
  //   dirtyData.name = "Byzantines";
  //   return cleanData;
  // }

  // getApiData = (urlParameter) => {
  //   return (
  //     fetch(`https://secret-ocean-49799.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/${urlParameter}`)
  //       .then(response => response)
  //       .then(response => response.json())
  //       .then((data) => {
  //         return (
  //           urlParameter === 'civilizations' ? this.setState({ civilizations: this.cleanBizantines(data) })
  //             : urlParameter === 'structures' ? this.setState({ structures: data.structures })
  //               : urlParameter === 'technologies' ? this.setState({ technologies: data.technologies })
  //                 : this.setState({ units: data.units })
  //         )
  //       })
  //       .catch(error => console.log(error))
  //   );
  // }


  render() {
    const { civilizations, structures, technologies, units, searchTerm } = this.state;
    return (
      <Pages
        // getApiData={this.getApiData}
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