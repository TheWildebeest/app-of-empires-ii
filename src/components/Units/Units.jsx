import React, { Component } from "react";
import styles from "./NavBar.module.scss";

class NavBar extends Component {

  state = {
    navIsShowing: true
  }

  toggleNav = () => {
    this.setState({
      navIsShowing: !this.state.navIsShowing,
    })
  }

  displayNav = () => {
    if (this.state.navIsShowing === true) {
      return styles.display
    }
  }

  toggleIcon = () => {
    // return this.state.navIsShowing ? "✖" : "📜";
    return this.state.navIsShowing ? "✖" : "☰";
  }


  render() {
    return (
      <>
        <nav className={styles.navBar + " " + this.displayNav()} >
          <div className={styles.navToggler}>
            <div className={styles.navBurger} onClick={this.toggleNav}>
              <h3 className={styles.toggleIcon}>{this.toggleIcon()}</h3>
            </div>
          </div>
          <div className={styles.navContent}>
            <div className={styles.mainMenu}>
              <div className={styles.navLogo}></div>
              <ul className={styles.navItems}>
                <li className={styles.navItem} onClick={() => this.props.getApiData("civilizations")}><h3>
                  Civilizations
                </h3></li>
                <li className={styles.navItem} onClick={() => this.props.getApiData("structures")}><h3>
                  Structures
                </h3></li>
                <li className={styles.navItem} onClick={() => this.props.getApiData("technologies")}><h3>
                  Technologies
                </h3></li>
                <li className={styles.navItem} onClick={() => this.props.getApiData("units")}><h3>
                  Units
                </h3></li>
              </ul>
            </div>

          </div>

        </nav>
      </>
    );
  }
}

export default NavBar;
