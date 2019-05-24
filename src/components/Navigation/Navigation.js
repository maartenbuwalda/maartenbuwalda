import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../components/Card'
import SubNavigation from './SubNavigation'
import styled from 'styled-components'
import { routes } from '../../constants/routes'
import { NavLink } from 'react-router-dom'
import colors from '../../constants/colors'
import { sizes } from '../../constants/mediaQueries'
import Icon from '@material-ui/core/Icon'

const Navigation = ({ position }) => {
  const checkbox = React.createRef()
  const currentPath = window.location.hash.replace('#', '')
  const closeMenu = () => {
    checkbox.current.checked = false
  }
  return (
    <Card position={position}>
      <MobileMenuToggle htmlFor="menu-toggle">
        <Icon>menu</Icon>
      </MobileMenuToggle>
      <Menu>
        <HiddenCheckbox
          type="checkbox"
          id="menu-toggle"
          ref={checkbox}
        />
        <LinkWrapper>
          <MobileMenuToggle htmlFor="menu-toggle">
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
                  onClick={() => {
                    if (!subNavigation.length) closeMenu()
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
                    closeMenu={closeMenu}
                    links={subNavigation}
                  />
                )}
              </div>
            )
          })}
        </LinkWrapper>
      </Menu>
    </Card>
  )
}

Navigation.propTypes = {
  position: PropTypes.string,
}

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
`

const Menu = styled.div`
  border-right: 1px solid ${colors.gray};
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
    padding: .5rem 1rem .5rem;
    font-size: 1.5rem;
    width: 100%;

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
  padding: 1rem;
  font-size: 2rem;
  
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
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: all .3s;
  opacity: 0;
  z-index: -1;

  @media (min-width: ${sizes.m}) {
    width: 100%;
    height: initial;
    position: initial;
    opacity: initial;
    z-index: initial;
  }

  ${MobileMenuToggle} {
    text-align: right;
  }
`

const HiddenCheckbox = styled.input`
  display: none;

  &:checked + ${LinkWrapper} {
    opacity: 1;
    z-index: 99;
  }
`

export default Navigation
