import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Link } from '@reach/router'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsShowing: false
    }
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
                <li className={styles.navItem}>
                  {/* onClick={() => this.props.getApiData("civilizations")} */}
                  <Link to="civilizations">
                    <h3>Civilizations</h3>
                  </Link>
                </li>
                <li className={styles.navItem}>
                  {/* onClick={() => this.props.getApiData("structures")} */}
                  {/* <Link to="structures"> */}
                  <h3>Structures</h3>
                  {/* </Link> */}
                </li>
                <li className={styles.navItem}>
                  {/* onClick={() => this.props.getApiData("technologies")} */}
                  {/* <Link to="technologies"> */}
                  <h3>Technologies</h3>
                  {/* </Link> */}
                </li>
                <li className={styles.navItem}>
                  {/* onClick={() => this.props.getApiData("units")} */}
                  {/* <Link to="units"> */}
                  <h3>Units</h3>
                  {/* </Link> */}
                </li>
              </ul >
            </div >

          </div >

        </nav >
      </>
    );
  }
}

export default NavBar;
