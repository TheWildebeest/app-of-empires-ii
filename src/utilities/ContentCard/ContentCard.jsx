import React, { Component } from 'react';
import styles from './ContentCard.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);


class ContentCard extends Component {

  getListItems = () => {
    setTimeout(() => {
      this.props.cardData.map((item) => {
        return <li className={styles.uniqueUnit}>{item}</li>
      }
      )
    }, 4000
    )
  }

  render() {
    const { cardName, subHeading } = this.props;
    let className = cx({
      cardDetails: true,
      civilizationsBackground: this.props.category === "civilizationsPage" ? true : false,
      structuresBackground: this.props.category === "structuresPage" ? true : false,
      technologiesBackground: this.props.category === "technologiesPage" ? true : false,
      unitsBackground: this.props.category === "unitsPage" ? true : false
    })
    return (
      <article className={styles.cardWrapper}>
        <div className={styles.cardHeading}>
          <h2 className={this.props.textVisible ? styles.fadeIn : ""}>{cardName ? cardName : ""}</h2>
        </div>
        <section className={className}>
          <h4 className={this.props.textVisible ? styles.fadeIn : ""}>{!cardName || cardName === "None found" ? "" : subHeading}</h4>
          <ul className={styles.list}>
            {this.props.children}
          </ul>
        </section>
      </article >
    );
  }
}

export default ContentCard;