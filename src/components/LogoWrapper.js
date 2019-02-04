import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import colors from '../constants/colors'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const LogoBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0 0 .2rem .2rem;
  background-color: ${colors.fadedWhite};

  svg {
    margin-top: 1rem;
    width: 8rem;
    height: 8rem;
    fill: ${props => props.color.hex.colorMutedRegular};
    transition: fill .3s;

    path {
      transition: all .5s;
      opacity: 0;

      &[data-appear=true] {
        opacity: 1;
      }
    }
  }

  h1 {
    display: block;
    letter-spacing: .1rem;
    font-family: 'Prime Light';
    font-size: 1.5rem;
    margin-bottom: 0;
    color: ${props => props.color.hex.colorMutedRegular};
  }
`

const LogoWrapper = ({ color }) => {
  return (
    <Wrapper>
      <LogoBackground color={color}>
        <Logo />
        <h1>maarten buwalda</h1>
      </LogoBackground>
    </Wrapper>
  )
}

LogoWrapper.propTypes = {
  color: PropTypes.object,
}

export default LogoWrapper
