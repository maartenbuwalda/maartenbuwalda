import React, { Component } from 'react'
import Background from './Background'
import Page from './Page'
import Loading from './Loading'
import LogoWrapper from './LogoWrapper'
import image from '../static/images/norway.jpg'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PageWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`

class App extends Component {
  componentDidMount () {
    this.props.getDominantColor(image)
  }

  render () {
    const { color } = this.props
    return (
      <React.Fragment>
        { color.isFetching
          ? <Loading />
          : (
            <Background color={color} image={image}>
              <LogoWrapper color={color} />
              <PageWrapper>
                <Page>
                  <h1>Greetings!</h1>
                  <p>My name is Maarten Buwalda, as you might have guessed. I'm a Dutch front-end developer, focused mainly on React.</p>
                </Page>
              </PageWrapper>
            </Background>
          )
        }
      </React.Fragment>
    )
  }
}

App.propTypes = {
  getDominantColor: PropTypes.func,
  color: PropTypes.object,
}

export default App
