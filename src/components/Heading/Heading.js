import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  transition: background-color .3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3rem;
  background-color: ${props => props.color.hex.colorMutedRegular};
  margin-bottom: 3rem;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  a {
    padding: 1rem;
    transition: color .3s;
    text-decoration: none;
    color: ${props => props.color.hex.colorMutedLight};
  }
`

const Heading = ({ color }) => (
  <Wrapper color={color}>
    <LinkWrapper color={color}>
      <Link to="/">home</Link>
      <Link to="/hello">hello</Link>
    </LinkWrapper>
  </Wrapper>
)

Heading.propTypes = {
  color: PropTypes.object,
}

export default Heading
