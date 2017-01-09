import React, { Component } from 'react'
import styles from './TopBar.sass'

class TopBar extends Component {
  render() {
  	console.log(this.props.color.toString())
    return (
      <nav className={styles["top"]}>
      	<h1 style={{
      		color: "rgb(" + this.props.color.toString() + ")"
      	}}>Maarten Buwalda</h1>
      </nav>
    );
  }
}

export default TopBar
