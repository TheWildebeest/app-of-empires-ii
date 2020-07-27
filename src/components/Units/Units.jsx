import React, { Component } from "react";
import Overlay from '../../containers/Overlay';
import PageHeading from '../../utilities/PageHeading';
import InputBox from "../../utilities/InputBox";
import ContentCard from "../../utilities/ContentCard";
import UnitsIcon from '../../assets/icons/units.png';

class Units extends Component {

  state = {
    defaultUnit: [{ name: "None found.", unique_unit: ["https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager"], unique_tech: ["https://age-of-empires-2-api.herokuapp.com/api/v1/technology/wheelbarrow"] }],
    otherdefaultUnit: [{
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
    targetUnit: {},
    uniqueUnits: [""],
    uniqueTechs: [""],
    textVisible: true
  }

  textFadeIn = () => {
    this.setState({ textVisible: false });
    setTimeout(() => this.setState({ textVisible: true }), 1500)
  }

  filterBySearchTerm = (searchTerm) => {
    const result = this.props.units.filter((unit) => {
      let unitName = unit.name.toUpperCase();
      return unitName.includes(searchTerm);
    })
    return result;
  }

  searchUnit = (searchbox) => {
    const searchTerm = searchbox.value.toUpperCase();
    console.log(searchTerm);
    let currentUnit;
    if ((searchTerm !== "") && (this.props.units != null)) {
      if (this.filterBySearchTerm(searchTerm).length >= 1) {
        currentUnit = this.filterBySearchTerm(searchTerm)
      }
    } else if (currentUnit === undefined || currentUnit === null) {
      currentUnit = this.state.otherdefaultUnit;
    } else {
      currentUnit = this.state.otherdefaultUnit;
    }
    if (currentUnit !== undefined && currentUnit !== null) {
      this.setState({
        targetUnit: currentUnit[0]
      });
    } else {
      this.setState({
        targetUnit: this.state.otherdefaultUnit[0]
      });
    }
    this.textFadeIn();
    // const uniqueUnits = this.state.targetUnit.unique_unit;
    // console.log(this.state.targetUnit);
    // this.getUniqueUnits(uniqueUnits);
  }

  render() {
    const { Units } = this.props;
    const { targetUnit } = this.state;
    return (
      <>
        <Overlay>
          <PageHeading pageHeadingText={"Units"} />
          <InputBox
            id={"unit"} type={"text"} placeholder={"Search for a unit..."}
            htmlFor={"unit"} iconUrl={UnitsIcon} altText={"Units"}
            autoComplete={"off"} autoFocus={true} Units={Units} inputHandler={this.searchUnit} />
          <ContentCard
            category={"unitsPage"}
            cardName={!targetUnit ? "" : targetUnit.name}
            subHeading={"Strengths"}
            textVisible={this.state.textVisible}
            textFadeIn={this.state.textFadeIn}
            cardData={this.state.uniqueUnits} />
        </Overlay>
      </>
    );
  }
}

export default Units;

        // if ((searchTerm && civilizations) && (civilizations.filter(civilization => {
        //   const civilizationName = civilization.name.toUpperCase();
        //   this.filterBySearchTerm(civilizationName, searchTerm)
        // })) === false) {
        //   currentUnit = civilizations.filter(civilization => {
        //     const civilizationName = civilization.name.toUpperCase();
        //     this.filterBySearchTerm(civilizationName, searchTerm);
        //   });