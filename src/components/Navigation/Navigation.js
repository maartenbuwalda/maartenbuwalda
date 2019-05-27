import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../../components/Card'
import SubNavigation from './SubNavigation'
import Logo from '../../components/Logo'
import styled, { css } from 'styled-components'
import { routes } from '../../constants/routes'
import { NavLink } from 'react-router-dom'
import { sizes } from '../../constants/mediaQueries'
import colors from '../../constants/colors'
import shadows from '../../constants/shadows'
import Icon from '@material-ui/core/Icon'

const Navigation = ({ position }) => {
  const [isToggled, toggleMenu] = useState(false)
  const currentPath = window.location.hash.replace('#', '')
  return (
    <StyledCard background="colored" position={position}>
      <MobileMenuWrapper>
        <MobileMenuToggle data-test-id="open-menu-button" onClick={() => toggleMenu(true)}>
          <Icon>menu</Icon>
        </MobileMenuToggle>
        <Logo white size="2rem" />
      </MobileMenuWrapper>
      <Menu>
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
                  <IconWrapper>
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
    </StyledCard>
  )
}

Navigation.propTypes = {
  position: PropTypes.string,
}

const StyledCard = styled(Card)`
  box-shadow: ${shadows.mild};

  @media (min-width: ${sizes.m}) {
    box-shadow: none;
  }
`

const MobileMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${sizes.m}) {
    display: none;
  }
`

const IconWrapper = styled.div`
  transition: all .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: 1rem;
  padding: 1rem;
  background-color: ${colors.gray};
  transform: translateX(-4rem) scaleX(0);
  
  @media (min-width: ${sizes.m}) {
    width: 1rem;
    height: 1rem;
    padding: 1rem;
  }
`

const Menu = styled.div`
  background: ${colors.white};

  @media (min-width: ${sizes.m}) {
    padding: 0;
    position: initial;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: none;
  }

  display: flex;
  flex-direction: column;
  
  .main-link {
    display: flex;
    align-items: center;
    transition: all .3s;
    text-decoration: none;
    margin: 0;
    font-size: 1rem;
    width: 100%;
    padding: 0 .5rem;
    color: ${colors.darkGray};

    @media (min-width: ${sizes.m}) {
      padding: .5rem 1rem;
      font-size: 1.2rem;
    }

    > span {
      transition: transform .3s;
      transform: translateX(-3rem);
    }

    transition: all .3s;

    &.active {
      > span {
        transform: translateX(0rem);
      }

      > ${IconWrapper} {
        transform: translateX(-1rem);
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

const LinkWrapper = styled.nav`
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
