import React, { Component } from 'react'
import styles from './Card.sass'

class Card extends Component {
  render() {
    return (
      <div className={styles["card"]}>
      	<figure>
      		<img src={this.props.content.image}/>
      	</figure>
      	<h2 style={{
      		color: "rgb(" + this.props.color.toString() + ")"
      	}}>{this.props.content.title}</h2>
      	<p>{this.props.content.body}</p>
      </div>
    );
  }
}

export default Card
