import React, { Component } from "react";
import Overlay from '../../containers/Overlay';
import PageHeading from '../../utilities/PageHeading';
import InputBox from "../../utilities/InputBox";
import ContentCard from "../../utilities/ContentCard";
import CivsIcon from '../../assets/icons/civs.png'

class Civilizations extends Component {

  state = {
    defaultCiv: [{ name: "...", unique_unit: ["https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager"], unique_tech: ["https://age-of-empires-2-api.herokuapp.com/api/v1/technology/wheelbarrow"] }],
    targetCiv: null,
    uniqueUnits: null,
    uniqueTechs: null,
    textVisible: true
  }

  // componentDidMount() {
  //   if (this.state.targetCiv === []) {
  //     this.setState({ targetCiv: this.state.defaultCiv });
  //   } else {
  //     console.log("Component Successfully Mounted");
  //   }
  // }

  getUniqueUnits = (uniqueUnits) => {
    if (uniqueUnits) {
      uniqueUnits.forEach((unit) => {
        console.log(unit);
      }
      )
    } else {
      console.log("no units");
    }
  }
  // targetCiv.unique_unit.forEach(unit, () => {
  //   fetch(`${unit}`)
  //     .then(unit => unit.json())
  //     .then(unit => console.log(unit))
  //     .catch(error => alert(error.text()))
  // })

  textFadeIn = () => {
    this.setState({ textVisible: false });
    setTimeout(() => this.setState({ textVisible: true }), 1500)
  }

  doStringsMatch = (civilization, searchbox) => {
    civilization.name.toUpperCase().includes(searchbox.value.toUpperCase())
  }

  searchCiv = (searchbox) => {
    const { civilizations } = this.props;
    let currentCiv;
    if ((searchbox.value && civilizations) && (civilizations.filter(civilization => this.doStringsMatch(civilization, searchbox))).length > 0) {
      currentCiv = civilizations.filter(civilization => this.doStringsMatch(civilization, searchbox));
    } else {
      currentCiv = this.state.defaultCiv;
    }
    this.setState({
      targetCiv: currentCiv
    });
    this.textFadeIn();
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
            textFadeIn={this.state.textFadeIn} />
        </Overlay>
      </>
    );
  }
}

export default Civilizations;
