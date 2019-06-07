import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import Logo from '../../components/Logo'
import styled, { css } from 'styled-components'
import { routes } from '../../constants/routes'
import { sizes } from '../../constants/mediaQueries'
import colors from '../../constants/colors'
import shadows from '../../constants/shadows'
import { ColorContext } from '../../context/color'
import NavigationItem from './NavigationItem'

const Navigation = () => {
  const [isToggled, toggleMenu] = useState(false)
  return (
    <ColorContext.Consumer>
      {({ theme }) => (
        <Nav>
          <MobileMenuWrapper theme={theme}>
            <MobileMenuToggle data-test-id="open-menu-button" onClick={() => toggleMenu(true)}>
              <Icon>menu</Icon>
            </MobileMenuToggle>
            <Logo white size="2rem" />
          </MobileMenuWrapper>
          <Menu theme={theme}>
            <LinkWrapper isToggled={isToggled}>
              <MobileMenuToggle data-test-id="close-menu-button" onClick={() => toggleMenu(false)}>
                <Icon>close</Icon>
              </MobileMenuToggle>
              {routes.map((route, i) => <NavigationItem toggleMenu={toggleMenu} theme={theme} key={i} item={route} />)}
            </LinkWrapper>
          </Menu>
        </Nav>
      )}
    </ColorContext.Consumer>
  )
}

Navigation.propTypes = {
  position: PropTypes.string,
}

const Nav = styled.nav`
  box-shadow: ${shadows.mild};

  @media (min-width: ${sizes.m}) {
    box-shadow: none;
  }
`

const MobileMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.hex.colorRegular};

  span {
    color: ${colors.white};
  }

  @media (min-width: ${sizes.m}) {
    display: none;
  }
`

const Menu = styled.div`
  background: ${colors.white};
  overflow: hidden;

  @media (min-width: ${sizes.m}) {
    padding: 0;
    position: initial;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: none;
  }
`

const MobileMenuToggle = styled.label`
  > span {
    overflow: initial;
    font-size: 2rem;
    padding: 1rem;
  }
  
  @media (min-width: ${sizes.m}) {
    display: none;
  }
`

const LinkWrapper = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  min-height: 100vh;
  transform: translateX(-100%);
  width: 100vw;
  transition: all .3s;
  opacity: 0;
  z-index: -1;

  @media (max-width: ${sizes.m}) {
    ${({ isToggled }) =>
    isToggled &&
    css`
      transform: translateX(0%);
      opacity: 1;
      z-index: 99;
    `}
  }

  @media (min-width: ${sizes.m}) {
    width: 100%;
    transform: initial;
    min-height: initial;
    height: initial;
    position: initial;
    opacity: initial;
    z-index: initial;
    box-shadow: none;
  }

  ${MobileMenuToggle} {
    color: ${colors.darkGray};
    text-align: right;
  }
`

export default Navigation
