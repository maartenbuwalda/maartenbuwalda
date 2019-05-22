import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import VendorLogo from '../VendorLogo'
import colors from '../../constants/colors'

const StyledSkill = styled.div`
  background: white;
`

const SkillDescription = styled.p`
  margin: 0;
  padding: 2rem;
  text-align: left;
`

const LogoWrapper = styled.div`
  max-height: 3rem;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${colors.gray};

  span {
    text-transform: capitalize;
    font-size: 1.2rem;
  }
`

const Skill = ({ vendor, children }) => {
  return (
    <StyledSkill>
      <LogoWrapper>
        <VendorLogo vendor={vendor} />
        <span>{vendor}</span>
      </LogoWrapper>
      <SkillDescription>
        {children}
      </SkillDescription>
    </StyledSkill>
  )
}

Skill.propTypes = {
  vendor: PropTypes.string,
  children: PropTypes.node,
}

export default Skill
