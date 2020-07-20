import React, { Component } from 'react';
import { Router } from '@reach/router'
import NavBar from '../../components/NavBar'
import Civilizations from '../../components/Civilizations'
// import Structures from '../../components/Structures'
// import Technologies from '../../components/Technologies'
import Units from '../../components/Units'

class Pages extends Component {

  render() {
    const { civilizations, getApiData, units } = this.props;
    return (
      <>
        <NavBar getApiData={getApiData} />
        <Router>
          {/* <CheatSheet default path="/" /> */}
          <Civilizations path="civilizations" civilizations={civilizations} />
          {/* <Structures path="buildings" /> */}
          {/* <Technologies path="technologies" /> */}
          <Units path="units" units={units} />
        </Router>
      </>
    );
  }
}

export default Pages;