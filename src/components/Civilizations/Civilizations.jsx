import React, { Component } from "react";
import Overlay from '../../containers/Overlay';
import PageHeading from '../../utilities/PageHeading';
import InputBox from "../../utilities/InputBox";
import ContentCard from "../../utilities/ContentCard";
import CivsIcon from '../../assets/icons/civs.png'

class Civilizations extends Component {

  state = {
    targetCiv: {
      name: "...",
      unique_unit: ["https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager"],
      unique_tech: ["https://age-of-empires-2-api.herokuapp.com/api/v1/technology/wheelbarrow"]
    },
    uniqueUnits: [],
    uniqueTechs: [],
    textVisible: true
  }

  getUniqueUnit = (targetCiv) => {
    // console.log(targetCiv);
    // targetCiv.unique_unit.forEach(unit, () => {
    //   fetch(`${unit}`)
    //     .then(unit => unit.json())
    //     .then(unit => console.log(unit))
    //     .catch(error => alert(error.text()))
    // })
  }
  textFadeIn = () => {
    this.setState({ textVisible: false });
    setTimeout(() => this.setState({ textVisible: true }), 1500)
  }

  searchCiv = (searchbox) => {
    let currentCiv = this.props.civilizations;
    let searchTerm = searchbox.value;
    if (!this.props.civilizations || !searchTerm) {
      console.log("no civs or empty search string")
    } else {
      currentCiv = this.props.civilizations.filter(
        ((civilization) => {
          const civilizationName = civilization.name.toUpperCase();
          searchTerm = searchTerm.toUpperCase();
          return civilizationName.includes(searchTerm);
        })
      );
    }
    this.setState({
      targetCiv: currentCiv[0]
    });
    console.log(currentCiv[0]);
    this.textFadeIn();
    // console.log(targetCiv.name)
    // this.getUniqueUnit(this.state.targetCiv)
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
          <ContentCard cardName={targetCiv.name} textVisible={this.state.textVisible} textFadeIn={this.state.textFadeIn} />
        </Overlay>
      </>
    );
  }
}

export default Civilizations;
