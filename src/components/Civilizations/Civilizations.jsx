import React, { Component } from "react";
import Overlay from '../../containers/Overlay';
import PageHeading from '../../utilities/PageHeading';
import InputBox from "../../utilities/InputBox";
import ContentCard from "../../utilities/ContentCard";
import CivsIcon from '../../assets/icons/civs.png';



class Civilizations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCiv: {
        name: "",
        bonus: [""],
        castleAgeTech: "",
        imperialAgeTech: "",
        civID: "",
        uniqueUnits: [""],
        teamBonus: "",
        dateModified: [1000000000000]
      },
      targetCiv: {
        name: "",
        bonus: [""],
        castleAgeTech: "",
        imperialAgeTech: "",
        civID: "",
        uniqueUnits: [""],
        teamBonus: "",
        dateModified: [1596332576807]
      },
      uniqueUnits: "",
      bonuses: "",
      textVisible: true
    }
  }

  componentDidMount() {
    this.props.getApiData("civilizations");
  }

  textFadeIn = () => {
    this.setState({ textVisible: false });
    setTimeout(() => this.setState({ textVisible: true }), 1000)
  }

  mapUnitsToState = () => {
    if (this.state.targetCiv) {
      const units = this.state.targetCiv.uniqueUnits.map(unit => <li>{unit}</li>);
      this.setState({uniqueUnits: units})
    }
  }

  filterBySearchTerm = (searchTerm) => {
    const result = this.props.civilizations.filter((civilization) => {
      let civName = civilization.name.toUpperCase();
      return civName.includes(searchTerm);
    });
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
      this.setState({
        targetCiv: currentCiv[0]
      });
    } else {
      this.setState({
        targetCiv: this.state.defaultCiv
      });
    }
    this.mapUnitsToState();
    this.textFadeIn();
  }

  render() {
    const { civilizations } = this.props;
    const { targetCiv, defaultCiv } = this.state;
    return (
      <Overlay>
        <PageHeading pageHeadingText={"Civilizations"} />
        <InputBox
          id={"civilization"} type={"text"} placeholder={"Search for a civilization..."}
          htmlFor={"civilization"} iconUrl={CivsIcon} altText={"civilizations"}
          autoComplete={"off"} autoFocus={true} civilizations={civilizations} inputHandler={this.searchCiv} />
        <ContentCard
          // "category" is to allow dynamic styling depending on which parent element renders the card
          category={"civilizationsPage"}
          cardDetails={!targetCiv ? defaultCiv : targetCiv}
          uniqueUnits={this.state.uniqueUnits}
          subHeadingOne={"Unique Units:"}
          subHeadingTwo={"Unique Techs:"}
          textVisible={this.state.textVisible}
        />
      </Overlay>
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