import React, { Component } from "react";
import styles from "./List.module.scss";

class List extends Component {
  render() {
    const { items, textVisible } = this.props;
    return (
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={item + index} className={textVisible ? styles.fadeIn : styles.listItem}>
          {item}<br/>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
