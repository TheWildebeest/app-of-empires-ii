import React, { Component } from 'react';
import styles from './Overlay.module.scss';

class Overlay extends Component {

  render() {
    const { children } = this.props;
    return (
      <main className={styles.pageWrapper}>
        {children}
      </main>
    );
  }
}

export default Overlay;