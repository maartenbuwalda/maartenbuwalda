import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HashRouter } from 'react-router-dom'
import BusinessCard from '../BusinessCard'
import Grid from '../Grid'
import Navigation from '../Navigation'
import Pages from '../../containers/Pages'
import Background from '../../components/Background'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <Background color={this.props.color}>
          <Grid>
            <BusinessCard position="s1"/>
            <Navigation position="m1" />
            <Pages position="l1" />
          </Grid>
        </Background>
      </HashRouter>
    )
  }
}

App.propTypes = {
  getDominantColor: PropTypes.func,
  color: PropTypes.object,
}

export default App
