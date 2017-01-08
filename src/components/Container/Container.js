import React, { Component } from 'react'
import styles from './Container.sass'
import TopBar from '../TopBar'
import image from '../../assets/images/test.jpg'
import Card from '../Card'

import content from '../../content'

class Container extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this._handleScroll);
  }
  _handleScroll(e){
    let scrollTop = e.srcElement.body.scrollTop
    console.log(scrollTop)
  }
  render() {
    return (
      <div className={styles["container"]}>
        <div className={styles["image-holder"]}/>
        <TopBar/>
        <div className={styles["content"]} >
          {content.map((c) => {
            return <Card content={c}/>
          })}
        </div>
      </div>
    );
  }
}

export default Container
