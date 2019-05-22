import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { ColorContext } from '../../context/color'

const ColoredIcon = styled(Icon)`
  transition: color .3s;
  color: ${({ theme }) => theme.hex.colorMutedRegular};
`

const StyledIcon = ({ children }) => {
  return (
    <ColorContext.Consumer>
      {({ theme }) => <ColoredIcon theme={theme}>{children}</ColoredIcon>}
    </ColorContext.Consumer>
  )
}

StyledIcon.propTypes = {
  children: PropTypes.node,
}

export default StyledIcon
