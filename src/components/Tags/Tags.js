import React from 'react'
import styled, { css } from 'styled-components'
import { ColorContext } from '../../context/color'
import PropTypes from 'prop-types'
import colors from '../../constants/colors'

const StyledTags = styled.div`
  display: flex;
  margin-top: .5rem;
  
  span {
    transition: background-color .3s;
    font-size: .8rem;
    text-transform: uppercase;
    margin-right: .5rem;
    ${({ theme, inverted }) => {
    if (inverted) {
      return css`
        color: ${theme.hex.colorRegular};
      `
    } else {
      return css`
        padding: .3rem .5rem;
        border-radius: .5rem;
        color: ${colors.fadedWhite};
        background-color: ${theme.hex.colorMutedLight};
      `
    }
  }}
  }
`

const Tags = ({ list, inverted }) => (
  <ColorContext.Consumer>
    {({ theme }) => {
      return <StyledTags inverted={inverted} theme={theme}>
        {list.map(tag => <span key={tag}>{tag}</span>)}
      </StyledTags>
    }}
  </ColorContext.Consumer>
)

Tags.propTypes = {
  list: PropTypes.array,
  inverted: PropTypes.bool,
}

export default Tags
