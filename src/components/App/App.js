import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HashRouter } from 'react-router-dom'
import BusinessCard from '../BusinessCard'
// import Timeline from '../Timeline'
import Heading from '../../containers/Heading'
import Background from '../../containers/Background'
import Grid from '../Grid'

const PageWrapper = styled.article`
  display: flex;
  justify-content: center;
`

class App extends Component {
  render () {
    return (
      <HashRouter>
        <React.Fragment>
          <Heading />
          <PageWrapper>
            <Grid>
              <BusinessCard position="s1" />
              {/* <Timeline position="m1" /> */}
            </Grid>
          </PageWrapper>
          <Background/>
        </React.Fragment>
      </HashRouter>
    )
  }
}

App.propTypes = {
  getDominantColor: PropTypes.func,
  color: PropTypes.object,
}

export default App
