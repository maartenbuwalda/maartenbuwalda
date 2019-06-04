import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SubNavigation from './SubNavigation'
import Logo from '../../components/Logo'
import styled, { css } from 'styled-components'
import { routes } from '../../constants/routes'
import { NavLink } from 'react-router-dom'
import { sizes } from '../../constants/mediaQueries'
import colors from '../../constants/colors'
import shadows from '../../constants/shadows'
import Icon from '@material-ui/core/Icon'
import { ColorContext } from '../../context/color'

const Navigation = () => {
  const [isToggled, toggleMenu] = useState(false)
  const currentPath = window.location.hash.replace('#', '')
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
              {routes.map((route, i) => {
                const { pathname, subNavigation, icon, label } = route
                return (
                  <div key={i}>
                    <NavLink
                      exact={pathname === '/'}
                      to={pathname}
                      className="main-link"
                      activeClassName="active"
                      data-test-id={`main-menu-item-${i}`}
                      onClick={() => {
                        if (!subNavigation.length) toggleMenu(false)
                      }}
                    >
                      <IconWrapper theme={theme}>
                        <Icon>{icon}</Icon>
                      </IconWrapper>
                      <span>{label}</span>
                    </NavLink>
                    {subNavigation.length > 0 && (
                      <SubNavigation
                        isToggled={currentPath.includes(pathname)}
                        toggleMenu={toggleMenu}
                        links={subNavigation}
                      />
                    )}
                  </div>
                )
              })}
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

const IconWrapper = styled.div`
  transition: transform .3s, background-color .6s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: 1rem;
  padding: 1rem;
  color: ${colors.fadedWhite};
  background-color: ${({ theme }) => theme.hex.colorRegular};
  transform: translateX(-4rem) scaleX(0);
  
  @media (min-width: ${sizes.m}) {
    width: 1rem;
    height: 1rem;
    padding: 1rem;
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
  
  .main-link {
    font-family: 'Crete Round', serif;
    text-decoration: none;
    font-size: 1rem;
    color: ${colors.darkGray};
    display: flex;
    align-items: center;
    transition: all .3s;
    margin: 0;
    width: 100%;

    > span {
      transition: transform .3s;
      transform: translateX(-2rem);
    }

    transition: all .3s;

    &.active {
      color: rgba(${({ theme }) => theme.rgb.colorMutedRegular}, 0.8);
      background-color: rgba(${({ theme }) => theme.rgb.colorMutedLight}, 0.2);

      > span {
        transform: translateX(1rem);
      }

      > ${IconWrapper} {
        transform: translateX(0rem);
      }
    }
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
