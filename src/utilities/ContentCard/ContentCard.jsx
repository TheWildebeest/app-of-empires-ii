import React, { Component } from 'react';
import styles from './ContentCard.module.scss';

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

  // getCardDataJsx = () => {
  //   const { cardData } = this.props;
  //   let cardDetails = "";
  //   console.log(cardData);
  //   cardData.map
  //   let i = 0;
  //   for (let i = 0; i <= (cardData.length - 1); i++) {
  //     cardDetails += <li>{cardData[i]}</li>
  //   }
  //   return cardDetails;
  // }


  render() {
    const { cardName } = this.props;
    return (
      <article className={styles.cardWrapper}>
        <div className={styles.cardHeading}>
          <h2 className={this.props.textVisible ? styles.fadeIn : ""}>{cardName}</h2>
        </div>
        <section className={styles.cardDetails} >
          <h4 className={styles.subHeading}>Unique Units:</h4>
          <ul>
            {/* {this.props.uniqueUnits.map(this.getListItems())} */}
          </ul>
        </section>
      </article>
    );
  }
}

export default ContentCard;