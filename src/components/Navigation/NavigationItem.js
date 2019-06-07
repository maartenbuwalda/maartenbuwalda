import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import SubNavigation from './SubNavigation'
import { sizes } from '../../constants/mediaQueries'
import colors from '../../constants/colors'

const NavigationItem = ({ theme, item, toggleMenu }) => {
  const currentPath = window.location.hash.replace('#', '')
  return (
    <StyledNavigationItem theme={theme}>
      <NavLink
        exact={item.pathname === '/'}
        to={item.pathname}
        className="main-link"
        activeClassName="active"
        data-test-id={`main-menu-item-${item.pathname}`}
        onClick={() => {
          if (!item.subNavigation.length) toggleMenu(false)
        }}
      >
        <IconWrapper theme={theme}>
          <Icon>{item.icon}</Icon>
        </IconWrapper>
        <span>{item.label}</span>
      </NavLink>
      {item.subNavigation.length > 0 && (
        <SubNavigation
          isToggled={currentPath.includes(item.pathname)}
          toggleMenu={toggleMenu}
          links={item.subNavigation}
        />
      )}
    </StyledNavigationItem>
  )
}

NavigationItem.propTypes = {
  theme: PropTypes.object,
  item: PropTypes.object,
  toggleMenu: PropTypes.func,
}

const IconWrapper = styled.div`
  transition: transform .3s, background-color .6s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: 1rem;
  padding: 1rem;
  color: ${colors.fadedWhite};
  transform: translateX(-4rem) scaleX(0);
  
  @media (min-width: ${sizes.m}) {
    width: 1rem;
    height: 1rem;
    padding: 1rem;
  }
`

const StyledNavigationItem = styled.div`
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
    transition: all .3s;

    > span {
      transition: transform .3s;
      transform: translateX(-2rem);
    }


    &.active {
      color: rgba(${({ theme }) => theme.rgb.colorMutedRegular}, 0.8);
      background-color: rgba(${({ theme }) => theme.rgb.colorMutedLight}, 0.2);

      > span {
        transform: translateX(1rem);
      }

      > ${IconWrapper} {
        background-color: ${({ theme }) => theme.hex.colorRegular};
        transform: translateX(0rem);
      }
    }
  }
`

export default NavigationItem
