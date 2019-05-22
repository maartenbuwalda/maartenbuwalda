import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ColorContext } from '../../context/color'

const ColoredBackground = styled.div`
  transition: background-color 1s;
  background-color: rgba(${({ theme }) => theme.rgb.colorMutedDark}, 0.1);
  min-height: 100vh;
`

const Background = ({ children }) => (
  <ColorContext.Consumer>
    {({ theme }) => <ColoredBackground theme={theme}>{children}</ColoredBackground>}
  </ColorContext.Consumer>
)

Background.propTypes = {
  children: PropTypes.node,
  color: PropTypes.object,
}

export default Background
