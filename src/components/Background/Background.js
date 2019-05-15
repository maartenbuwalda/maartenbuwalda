import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../constants/colors'

const ColoredBackground = styled.div`
  transition: background-color 5s;
  background-color: ${colors.gray};
  min-height: 100vh;
`

const Background = ({ children }) => <ColoredBackground>{children}</ColoredBackground>

Background.propTypes = {
  children: PropTypes.node,
  color: PropTypes.object,
}

export default Background
