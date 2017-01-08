import React, { Component } from 'react'
import styles from './Card.sass'

class Card extends Component {
  render() {
    return (
      <div className={styles["card"]}>
      	<h2>{this.props.content.title}</h2>
      	<p>{this.props.content.body}</p>
      </div>
    );
  }
}

export default Card
