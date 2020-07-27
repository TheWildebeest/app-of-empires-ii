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
  //     defaultCiv: [{
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
    defaultCiv: [{
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
    uniqueUnits: [],
    uniqueTechs: [""],
    textVisible: true
  }

  // getUniqueUnits = (uniqueUnits, searchTerm) => {
  //   let uniqueUnitDetails = [];
  //   if (this.state.targetCiv.name !== "None found" && searchTerm !== "") {
  //     uniqueUnits.forEach((unit) => {
  //       fetch(`https://secret-ocean-49799.herokuapp.com/${unit}`)
  //         .then(response => response.json())
  //         .then(data => {
  //           console.log(data);
  //           let currentUnit = { name: data.name, description: data.description, attackBonus: data.attack_bonus, hitPoints: data.hit_points }
  //           uniqueUnitDetails.push(currentUnit);
  //           console.log(uniqueUnitDetails)
  //         })
  //         .catch(error => alert(error))
  //     });
  //     // this.setState({ uniqueUnits: uniqueUnitDetails });
  //   } else {
  //     let currentUnit = { name: "n/a", description: "n/a", attackBonus: 0, hitPoints: 0 }
  //     uniqueUnitDetails.push(currentUnit);
  //     // this.setState({ uniqueUnits: uniqueUnitDetails })
  //   }
  //   this.setState({ uniqueUnits: uniqueUnitDetails })
  //   return uniqueUnitDetails;
  // }


  textFadeIn = () => {
    this.setState({ textVisible: false });
    setTimeout(() => this.setState({ textVisible: true }), 1500)
  }

  filterBySearchTerm = (searchTerm) => {
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
      if (this.filterBySearchTerm(searchTerm).length >= 1) {
        currentCiv = this.filterBySearchTerm(searchTerm)
      }
    } else if (currentCiv === undefined || currentCiv === null) {
      currentCiv = this.state.defaultCiv;
    } else {
      currentCiv = this.state.defaultCiv;
    }
    if (currentCiv !== undefined && currentCiv !== null) {
      if (this.state.targetCiv.name !== "None found" && this.state.targetCiv.unique_unit !== undefined) {
        const uniqueUnits = this.state.targetCiv.unique_unit;
        console.log(this.state.targetCiv.unique_unit);
        // this.getUniqueUnits(uniqueUnits, searchTerm);
      };
      this.setState({
        targetCiv: currentCiv[0]
      });
    } else {
      this.setState({
        targetCiv: this.state.defaultCiv[0]
      });
    }
    this.textFadeIn();
    // if (this.state.targetCiv.name !== "None found" && this.state.targetCiv.unique_unit !== undefined) {
    //   const uniqueUnits = this.state.targetCiv.unique_unit;
    //   console.log(this.state.targetCiv.unique_unit);
    //   this.getUniqueUnits(uniqueUnits, searchTerm);
    // };
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
            category={"civilizationsPage"}
            cardName={!targetCiv ? "" : targetCiv.name}
            subHeading={"Unique Units:"}
            textVisible={this.state.textVisible}
            textFadeIn={this.state.textFadeIn}
            unitsData={this.state.uniqueUnits}>
            <li>HALLOOORRR</li>
          </ContentCard>

        </Overlay>
      </>
    );
  }
}

export default Civilizations;

        // if ((searchTerm && civilizations) && (civilizations.filter(civilization => {
        //   const civilizationName = civilization.name.toUpperCase();
        //   this.filterBySearchTerm(civilizationName, searchTerm)
        // })) === false) {
        //   currentCiv = civilizations.filter(civilization => {
        //     const civilizationName = civilization.name.toUpperCase();
        //     this.filterBySearchTerm(civilizationName, searchTerm);
        //   });