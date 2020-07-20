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

  render() {
    const { cardName, subHeading } = this.props;
    return (
      <article className={styles.cardWrapper}>
        <div className={styles.cardHeading}>
          <h2 className={this.props.textVisible ? styles.fadeIn : ""}>{cardName}</h2>
        </div>
        <section className={styles.cardDetails} >
          <h4 className={styles.subHeading}>{subHeading}</h4>
          <ul>
            {/* {this.props.uniqueUnits.map(this.getListItems())} */}
          </ul>
        </section>
      </article>
    );
  }
}

export default ContentCard;