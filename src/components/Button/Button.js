import React  from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const StyledButton = styled.div`
  background-color: ${colors.lightBlue};
  padding: .5rem 1rem;
  margin-right: .5rem;
  cursor: pointer;
`

const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      { props.children }
    </StyledButton>
  )
}

export default Button
