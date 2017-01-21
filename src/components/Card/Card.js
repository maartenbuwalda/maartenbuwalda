import React, { Component } from 'react'
import styles from './Card.sass'

class Card extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={{backgroundColor: "rgb(" + this.props.color.toString() + ")"}} className={styles["card"]}>
        <div 
          className={styles["card-image"]}
          style={{backgroundImage: 'url(' + this.props.content.image + ')'}}/>
      	<h2>{this.props.content.title}</h2>
      	<p>{this.props.content.body}</p>
      </div>
    );
  }
}

export default Card
