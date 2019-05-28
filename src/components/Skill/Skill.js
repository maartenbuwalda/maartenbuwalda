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

const SkillDescription = styled.p`
  display: none;
  margin: 0;
  padding: 2rem;
  text-align: left;
  border-top: 1px solid ${colors.gray};
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

  span {
    text-transform: capitalize;
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`

const Skill = ({ name, children }) => {
  return (
    <LazyLoad
      height={80}
      offset={-100}>
      <StyledSkill>
        <LogoWrapper>
          <VendorLogo vendor={name} />
          <div>
            <span>{name}</span>
          </div>
        </LogoWrapper>
        {children && (
          <SkillDescription>
            {children}
          </SkillDescription>
        )}
      </StyledSkill>
    </LazyLoad>
  )
}

Skill.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
}

export default Skill
