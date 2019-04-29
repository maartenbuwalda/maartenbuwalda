import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../containers/Card'
import styled from 'styled-components'
import { timeline } from '../../constants/pages'
import { NavLink } from 'react-router-dom'
import colors from '../../constants/colors'
import Icon from '@material-ui/core/Icon'

const Menu = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  /* padding: 1rem 0; */

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

const Timeline = ({ position }) => {
  return (
    <Card position={position}>
      <Menu>
        {timeline.map((x, i) => {
          return (
            <NavLink exact key={i} to={x.pathname} activeClassName="active">
              <IconWrapper>
                <Icon>{x.icon}</Icon>
              </IconWrapper>
              <span>{x.label}</span>
            </NavLink>
          )
        })}
      </Menu>
    </Card>
  )
}

Timeline.propTypes = {
  position: PropTypes.string,
}

export default Timeline
