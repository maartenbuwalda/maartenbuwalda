import React, { Component } from 'react'
import styles from './TopBar.sass'

class TopBar extends Component {
  render() {
    return (
      <nav className={styles["top"]}>
      	<h1>Maarten Buwalda</h1>
      </nav>
    );
  }
}

export default TopBar
