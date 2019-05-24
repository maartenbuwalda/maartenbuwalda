import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import VendorLogo from '../VendorLogo'
import colors from '../../constants/colors'

const StyledSkill = styled.div`
  /* display: flex;
  flex-direction: column; */
  background: ${colors.white};
`

const SkillDescription = styled.p`
  margin: 0;
  padding: 2rem;
  text-align: left;
  border-top: 1px solid ${colors.gray};
`

const LogoWrapper = styled.div`
  max-height: 3rem;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    text-transform: capitalize;
    font-size: 1.2rem;
  }
`

const Skill = ({ name, children }) => {
  return (
    <StyledSkill>
      <LogoWrapper>
        <VendorLogo vendor={name} />
        <span>{name}</span>
      </LogoWrapper>
      {children && (
        <SkillDescription>
          {children}
        </SkillDescription>
      )}
    </StyledSkill>
  )
}

Skill.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
}

export default Skill
