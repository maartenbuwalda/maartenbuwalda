import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import VendorLogo from '../VendorLogo'
import colors from '../../constants/colors'
import LazyLoad from 'react-lazyload'

const StyledSkill = styled.div`
  animation: appear 1s ease;
  background: ${colors.white};
`

const LogoWrapper = styled.div`
  max-height: 3rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 3rem 1fr;

  img {
    min-width: 2rem;
  }

  div {
    display: flex;
    align-items: center;
  }

  span, a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`

const Skill = ({ name, link }) => {
  return (
    <LazyLoad
      height={80}
      offset={-100}>
      <StyledSkill>
        <LogoWrapper>
          <VendorLogo vendor={name} />
          <div>
            {link
              ? <a href={link} rel="noopener noreferrer" target="_blank">{name}</a>
              : <span>{name}</span>
            }
          </div>
        </LogoWrapper>
      </StyledSkill>
    </LazyLoad>
  )
}

Skill.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node,
}

export default Skill
