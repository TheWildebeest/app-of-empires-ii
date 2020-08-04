import React, { Component } from 'react';
import styles from './ContentCard.module.scss';
import classNames from 'classnames/bind';
import List from "../List";
let cx = classNames.bind(styles);

class ContentCard extends Component {


  render() {
    const { cardDetails, subHeadingOne, subHeadingTwo, textVisible } = this.props;
    let backgroundClassName = cx({
      cardDetails: true,
      civilizationsBackground: this.props.category === "civilizationsPage" ? true : false,
      structuresBackground: this.props.category === "structuresPage" ? true : false,
      technologiesBackground: this.props.category === "technologiesPage" ? true : false,
      unitsBackground: this.props.category === "unitsPage" ? true : false
    })
    return (
      <article className={styles.cardWrapper}>
        <div className={styles.cardHeading}>
          <h2 className={textVisible ? styles.fadeIn : ""}>{cardDetails.name}</h2>
        </div>
        <section className={backgroundClassName}>
          <div className={styles.details}>
            <h4 className={textVisible ? styles.fadeIn : ""}>{cardDetails.name === "" ? "" : subHeadingOne}</h4>
            <List items={cardDetails.uniqueUnits} textVisible={textVisible}/>
          </div>
          <div className={styles.details}>
            <h4 className={textVisible ? styles.fadeIn : ""}>{cardDetails.name === "" ? "" : subHeadingTwo}</h4>
            <List items={cardDetails.bonus} textVisible={textVisible}/>
          </div>
        </section>
      </article >
    );
  }
}

export default ContentCard;