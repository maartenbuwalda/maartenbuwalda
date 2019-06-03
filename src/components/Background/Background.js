import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ColorContext } from '../../context/color'

const BackgroundDarkOverlay = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(
    0deg, rgba(${({ theme }) => theme.rgb.colorMutedDark}, 0.1), rgba(${({ theme }) => theme.rgb.colorMutedDark}, 0)
  );
`

const ColoredBackground = styled.div`
  transition: background-color 1s;
  position: relative;
  min-height: 100vh;
  background-color: rgba(${({ theme }) => theme.rgb.colorMutedDark}, 0.1);
`

const Background = ({ children }) => (
  <ColorContext.Consumer>
    {({ theme }) => (
      <ColoredBackground theme={theme}>
        {children}
        <BackgroundDarkOverlay theme={theme} />
      </ColoredBackground>
    )}
  </ColorContext.Consumer>
)

Background.propTypes = {
  children: PropTypes.node,
  color: PropTypes.object,
}

export default Background
