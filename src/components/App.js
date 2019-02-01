import React, { Component } from 'react'
import Header from './Header'
import image from '../static/images/ireland2.jpg'

class App extends Component {
  componentDidMount () {
    this.props.getDominantColor(image)
  }
  render () {
    const { color, setDominantColor } = this.props
    return (
      <React.Fragment>
        <Header image={image} color={color} setDominantColor={setDominantColor}/>
      </React.Fragment>
    )
  }
}

export default App
