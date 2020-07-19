import React, { Component } from "react";
import Overlay from '../../containers/Overlay';
import PageHeading from '../../utilities/PageHeading';
import InputBox from "../../utilities/InputBox";
import ContentCard from "../../utilities/ContentCard";
import CivsIcon from '../../assets/icons/civs.png'

class Civilizations extends Component {

  state = {
    targetCiv: null,
    uniqueUnits: null,
    uniqueTechs: null,
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
    let currentCiv;
    if (searchbox.value && this.props.civilizations) {
      currentCiv = this.props.civilizations.filter(
        civilization =>
          civilization.name.toUpperCase().includes(searchbox.value.toUpperCase())
      );
    } else {
      currentCiv = [{ name: "...", unique_unit: "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/villager", unique_tech: "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/wheelbarrow" }]
    }
    this.setState({
      targetCiv: currentCiv[0]
    });
    console.log(currentCiv[0]);
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
