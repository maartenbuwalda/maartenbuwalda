import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Vibrant from 'node-vibrant'
import BusinessCard from '../BusinessCard'
import Grid from '../Grid'
import Navigation from '../Navigation'
import Router from '../../components/Router'
import Background from '../../components/Background'
import Sticky from '../../components/Sticky'
import { ColorContext, colors } from '../../context/color'
import getColor from '../../utils/getColor'

class App extends Component {
  constructor (props) {
    super(props)
    this.updateTheme = image => {
      const img = new Vibrant(image)
      img.getPalette().then((palette) => this.setState(state => ({
        ...state,
        theme: getColor(palette),
      })))
    }

    this.state = {
      theme: colors,
      updateTheme: this.updateTheme,
    }
  }
  render () {
    return (
      <HashRouter>
        <ColorContext.Provider value={this.state}>
          <Background>
            <Grid>
              <Sticky>
                <BusinessCard position="s1"/>
                <Navigation position="s1" />
              </Sticky>
              <Router position="l1" />
            </Grid>
          </Background>
        </ColorContext.Provider>
      </HashRouter>
    )
  }
}

export default App
