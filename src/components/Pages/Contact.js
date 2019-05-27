import React from 'react'
import Skill from '../Skill'
import StyledIcon from '../StyledIcon'
import CenteredBlocks from '../CenteredBlocks'

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
