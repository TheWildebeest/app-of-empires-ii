import React, { Component } from "react";
import Overlay from '../../containers/Overlay';
import PageHeading from '../../utilities/PageHeading';
import InputBox from "../../utilities/InputBox";
import ContentCard from "../../utilities/ContentCard";
import CivsIcon from '../../assets/icons/civs.png';

class Civilizations extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     defaultCiv: [{ name: "None found.", unique_unit: ["https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager"], unique_tech: ["https://age-of-empires-2-api.herokuapp.com/api/v1/technology/wheelbarrow"] }],
  //     otherDefaultCiv: [{
  //       "id": 18,
  //       "name": "None found",
  //       "expansion": "n/a",
  //       "army_type": "n/a",
  //       "unique_unit": [
  //         "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager",
  //         "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager"
  //       ],
  //       "unique_tech": [
  //         "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/wheelbarrow"
  //       ],
  //       "team_bonus": "n/a",
  //       "civilization_bonus": [
  //         "n/a",
  //         "n/a",
  //         "n/a"
  //       ]
  //     }],
  //     targetCiv: {},
  //     uniqueUnits: { unique_unit: ["..."] },
  //     uniqueTechs: { unique_tech: ["..."] },
  //     textVisible: true
  //   }
  // }

  state = {
    defaultCiv: [{ name: "None found.", unique_unit: ["https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager"], unique_tech: ["https://age-of-empires-2-api.herokuapp.com/api/v1/technology/wheelbarrow"] }],
    otherDefaultCiv: [{
      "id": 18,
      "name": "None found",
      "expansion": "n/a",
      "army_type": "n/a",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager",
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/wheelbarrow"
      ],
      "team_bonus": "n/a",
      "civilization_bonus": [
        "n/a",
        "n/a",
        "n/a"
      ]
    }],
    targetCiv: {},
    uniqueUnits: [""],
    uniqueTechs: [""],
    textVisible: true
  }

  getUniqueUnits = (uniqueUnits) => {
    let listOfUnits = [""];
    if (uniqueUnits !== null && uniqueUnits !== undefined) {
      uniqueUnits.forEach((unit) => {
        fetch(`https://secret-ocean-49799.herokuapp.com/${unit}`)
          .then(response => response.json())
          .then(data => listOfUnits.push(data.name))
          .catch(error => alert(error))
      })
    } else {
      console.log("no units");
    }
    this.setState({ uniqueUnits: listOfUnits })
    return listOfUnits;
  }


  textFadeIn = () => {
    this.setState({ textVisible: false });
    setTimeout(() => this.setState({ textVisible: true }), 1500)
  }

  doStringsMatch = (searchTerm) => {
    const result = this.props.civilizations.filter((civilization) => {
      let civName = civilization.name.toUpperCase();
      return civName.includes(searchTerm);
    })
    return result;
  }

  searchCiv = (searchbox) => {
    const searchTerm = searchbox.value.toUpperCase();
    console.log(searchTerm);
    let currentCiv;
    if ((searchTerm !== "") && (this.props.civilizations != null)) {
      if (this.doStringsMatch(searchTerm).length >= 1) {
        currentCiv = this.doStringsMatch(searchTerm)
      }
    } else if (currentCiv === undefined || currentCiv === null) {
      currentCiv = this.state.otherDefaultCiv;
    } else {
      currentCiv = this.state.otherDefaultCiv;
    }
    if (currentCiv !== undefined && currentCiv !== null) {
      this.setState({
        targetCiv: currentCiv[0]
      });
    } else {
      this.setState({
        targetCiv: this.state.otherDefaultCiv[0]
      });
    }
    this.textFadeIn();
    const uniqueUnits = this.state.targetCiv.unique_unit;
    console.log(this.state.targetCiv);
    this.getUniqueUnits(uniqueUnits);
  }

  render() {
    const { civilizations } = this.props;
    const { targetCiv } = this.state;
    return (
      <>
        <Overlay>
          <PageHeading pageHeadingText={"Civilizations"} />
          <InputBox
            id={"civilization"} type={"text"} placeholder={"Search for a civilization..."}
            htmlFor={"civilization"} iconUrl={CivsIcon} altText={"civilizations"}
            autoComplete={"off"} autoFocus={true} civilizations={civilizations} inputHandler={this.searchCiv} />
          <ContentCard
            cardName={!targetCiv ? "" : targetCiv.name}
            textVisible={this.state.textVisible}
            textFadeIn={this.state.textFadeIn}
            cardData={this.state.uniqueUnits} />
        </Overlay>
      </>
    );
  }
}

export default Civilizations;

        // if ((searchTerm && civilizations) && (civilizations.filter(civilization => {
        //   const civilizationName = civilization.name.toUpperCase();
        //   this.doStringsMatch(civilizationName, searchTerm)
        // })) === false) {
        //   currentCiv = civilizations.filter(civilization => {
        //     const civilizationName = civilization.name.toUpperCase();
        //     this.doStringsMatch(civilizationName, searchTerm);
        //   });