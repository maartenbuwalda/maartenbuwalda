import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../containers/Card'
import styled from 'styled-components'
import { content } from '../../constants/pages'
import { NavLink } from 'react-router-dom'
import colors from '../../constants/colors'
import shadows from '../../constants/shadows'
import { sizes } from '../../constants/mediaQueries'
import Icon from '@material-ui/core/Icon'

const Menu = styled.div`
  box-shadow: ${shadows.mild};
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
  
  a {
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

      > div {
        transform: translateX(-1rem);
      }
    }
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
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: all .3s;
  opacity: 0;
  z-index: -1;

  @media (min-width: ${sizes.m}) {
    width: initial;
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
    z-index: 3;
  }
`

const Navigation = ({ position }) => {
  const checkbox = React.createRef()
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
          {content.map((x, i) => {
            return (
              <NavLink
                exact
                key={i}
                to={x.pathname}
                activeClassName="active"
                onClick={() => checkbox.current.checked = false}
              >
                <IconWrapper>
                  <Icon>{x.icon}</Icon>
                </IconWrapper>
                <span>{x.label}</span>
              </NavLink>
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

export default Navigation
