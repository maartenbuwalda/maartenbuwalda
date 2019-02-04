import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'

const Wrapper = styled.div`
  background-color: ${props => props.color.hex.colorMutedRegular};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
  width: 100vw;
  background-size: cover;
`

const Background = ({ image, color, children }) => (
  <Fade in={true} timeout={500}>
    <Wrapper color={color} image={image}>
      {children}
    </Wrapper>
  </Fade>
)

Background.propTypes = {
  image: PropTypes.string,
  color: PropTypes.object,
  children: PropTypes.node,
}

export default Background
