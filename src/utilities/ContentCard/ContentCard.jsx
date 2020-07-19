import React, { Component } from 'react';
import styles from './ContentCard.module.scss';

class ContentCard extends Component {

  cardContent = (searchTerm) => {

  }

  render() {
    const { cardName, cardContent } = this.props;
    return (
      <article className={styles.cardWrapper}>
        <div className={styles.cardHeading}>
          <h2 className={this.props.textVisible ? styles.fadeIn : ""}>{cardName}</h2>
        </div>
        <section className={styles.cardDetails} >
          {cardContent}
        </section>
      </article>
    );
  }
}

export default ContentCard;