import React, { Component } from 'react';
import styles from './InputBox.module.scss';

class InputBox extends Component {

  render() {
    const { id, type, placeholder, autoComplete, inputHandler, htmlFor, iconUrl, altText } = this.props;

    return (
      <div className={styles.inputWrapper}>
        <input className={styles.inputBox}
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(event) => inputHandler(event.target)} />
        <label htmlFor={htmlFor} className={styles.labelWrapper} >
          <img className={styles.iconImage} src={iconUrl} alt={altText} />
        </label>
      </div>

    );
  }
}

export default InputBox;