import React, { Component } from 'react';
import styles from './PageHeading.module.scss';
class PageHeading extends Component {
  render() {
    const { pageHeadingText } = this.props;
    return (
      <div className={styles.pageHeadingWrapper}>
        <h1 className={styles.pageHeadingContent}>{pageHeadingText}</h1>
      </div>
    )
  }
}

export default PageHeading;