import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { ColorContext } from '../../context/color'

const Wrapper = styled.div`
  padding: 0 1.5rem;
  overflow: hidden;
  opacity: 0;
  display: flex;
  flex-direction: column;
  transition: background-color 1s, opacity .6s, max-height .6s, padding .6s;
  max-height: 0;
  background-color: rgba(${({ theme }) => theme.rgb.colorMutedLight}, 0.2);

  a {
    text-decoration: none;
    margin: 0;
    padding: .5rem 1rem .5rem;
    font-size: 1.2rem;
  }
`

const HiddenCheckbox = styled.input`
  display: none;

  &:checked + ${Wrapper} {
    opacity: 1;
    max-height: 20rem;
    padding: 1rem 1.5rem;
  }
`

const SubNavigation = ({ isToggled, links, closeMenu }) => {
  return (
    <ColorContext.Consumer>
      {({ theme }) => (
        <>
          <HiddenCheckbox readOnly checked={isToggled} type="checkbox" id="sub-menu-toggle"/>
          <Wrapper theme={theme}>
            {links.map((x, i) => {
              return (
                <NavLink
                  exact
                  key={i}
                  to={x.pathname}
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  {x.label}
                </NavLink>
              )
            })}
          </Wrapper>
        </>
      )}
    </ColorContext.Consumer>
  )
}

SubNavigation.propTypes = {
  isToggled: PropTypes.bool,
  links: PropTypes.array,
  closeMenu: PropTypes.func,
}

export default SubNavigation
