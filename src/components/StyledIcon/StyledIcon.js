import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { ColorContext } from '../../context/color'
import colors from '../../constants/colors'

const ColoredIcon = styled(Icon)`
  transition: color .3s;
  color: ${({ theme }) => theme.hex.colorMutedRegular};
  ${({ framed }) => framed && css`
    background: ${colors.white};
    padding: 1rem;
  `};
`

const StyledIcon = ({ children, ...rest }) => {
  return (
    <ColorContext.Consumer>
      {({ theme }) => (
        <ColoredIcon theme={theme} {...rest}>
          {children}
        </ColoredIcon>
      )}
    </ColorContext.Consumer>
  )
}

StyledIcon.propTypes = {
  children: PropTypes.node,
}

export default StyledIcon
