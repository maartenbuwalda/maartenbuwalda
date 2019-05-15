import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { ColorContext } from '../../context/color'

const StyledButton = styled.div`
  background-color: ${colors.lightBlue};
  padding: .5rem 1rem;
  margin-right: .5rem;
  cursor: pointer;
`

class Button extends React.Component {
  render () {
    const theme = this.context
    console.log(theme)
    return (
      <StyledButton onClick={this.props.onClick}>
        { this.props.children }
      </StyledButton>
    )
  }
}

Button.contextType = ColorContext

export default Button
