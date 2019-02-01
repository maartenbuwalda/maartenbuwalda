import React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const TopBanner = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff url(${props => props.image}) no-repeat fixed center;
  min-height: 92vh;
  background-size: cover;

  h1 {
    display: block;
    padding: 1rem;
    border-radius: .5rem;
    letter-spacing: .1rem;
    font-family: 'Prime Light';
    font-size: 1.5rem;
    color: ${colors.fadedWhite};
    background-color: rgba(${props => props.color.rgb.colorMutedRegular}, 0.8);
  }
`

const Logo = styled.div`
  border-radius: 10%;
  transform: rotate(45deg);
  width: 12rem;
  height: 12rem;
  background-color: rgba(${props => props.color.rgb.colorMutedRegular}, 0.8);
  margin-bottom: 1.5rem;
`

const Header = ({ color, image }) => (
  <TopBanner image={image} color={color}>
    <Logo color={color}/>
    <h1>maarten buwalda</h1>
  </TopBanner>
)

export default Header
