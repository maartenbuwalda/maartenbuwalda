import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'
import ireland from '../../static/images/ireland.jpg'
import norway from '../../static/images/norway.jpg'

const BackgroundImage = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  background-color: ${props => props.color.hex.colorMutedRegular};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
  width: 100vw;
  background-size: cover;
`

class Background extends React.Component {
  componentDidMount () {
    this.setTheme()
  }

  componentDidUpdate (prevProps) {
    const currentPath = this.props.location.pathname
    const previousPath = prevProps.location.pathname
    if (currentPath !== previousPath) {
      this.setTheme()
    }
  }

  setTheme () {
    const { getDominantColor, location: { pathname } } = this.props
    const image = this.getImage(pathname)
    getDominantColor(image)
  }

  getImage (path) {
    switch (path) {
      case '/hello': return norway
      case '/': return ireland
      default: return norway
    }
  }

  render () {
    const { color, location: { pathname } } = this.props
    return (
      <React.Fragment>
        <Fade in={pathname === '/hello'} timeout={1000}>
          <BackgroundImage color={color} image={norway} />
        </Fade>
        <Fade in={pathname === '/'} timeout={1000}>
          <BackgroundImage color={color} image={ireland} />
        </Fade>
      </React.Fragment>
    )
  }
}

Background.propTypes = {
  image: PropTypes.string,
  color: PropTypes.object,
  children: PropTypes.node,
  location: PropTypes.object,
  getDominantColor: PropTypes.func,
}

export default Background
