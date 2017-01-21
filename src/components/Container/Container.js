import React, { Component } from 'react'
import styles from './Container.sass'
import TopBar from '../TopBar'
import image from '../../assets/images/test4.jpg'
import Card from '../Card'

import content from '../../content'

class Container extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "#000000",
      blur: false
    }

    this._handleScroll = this._handleScroll.bind(this)
  }
  componentDidMount(){
    let image = document.getElementById("image")
    setTimeout(() => {
      var colorThief = new ColorThief()
      this.setState({
        color: colorThief.getColor(image)
      }) 
    }, 1)
    window.addEventListener('scroll', this._handleScroll);
  }

  _handleScroll(e){
    
  }

  render() {
    return (
      <div className={styles["container"]}>
        <div style={{backgroundImage: 'url(' + image + ')'}} id="image-holder" className={styles["image-holder"]}>
          <img src={image} id="image"/>
        </div>
        <TopBar color={this.state.color}/>
        <div className={styles["content"]} >
          {content.map((c, i) => {
            return <Card color={this.state.color} key={i} content={c}/>
          })}
        </div>
      </div>
    );
  }
}

export default Container
