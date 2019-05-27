import React from 'react'
import Skill from '../components/Skill'
import StyledIcon from '../components/StyledIcon'
import CenteredBlocks from '../components/CenteredBlocks'

const Contact = (
  <>
    <section>
      <p>Feel free to contact me on:</p>
    </section>
    <section>
      <CenteredBlocks>
        <Skill name="github" />
        <Skill name="linkedin" />
        <StyledIcon>email</StyledIcon>
      </CenteredBlocks>
    </section>
  </>
)

export default Contact
