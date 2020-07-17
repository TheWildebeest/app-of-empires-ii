import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../assets/intergr8-logo-transparent-black-no-tagline.png';


class NavBar extends Component {
  state = {
    navOpen: true
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  displayNav = () => {
    return this.state.navOpen ? styles.displayMobileNav : styles.hideMobileNav;
  }

  toggleIcon = () => {
    return this.state.navOpen ? "✖" : "📜";
  }


  render() {
    return (
      <>
        <nav className={styles.navbar}>
          {/* <h1>Nav Bar</h1> */}
          <img src={logo} alt="intergr8 logo" />
          <div>
            <div className={this.displayNav()}>
              {this.renderNav()}
            </div>
            <h3 className={styles.burger}>
              {this.toggleIcon()}
            </h3>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
