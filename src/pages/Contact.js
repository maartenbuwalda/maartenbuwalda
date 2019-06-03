import React from 'react'
import Skill from '../components/Skill'
import CenteredBlocks from '../components/CenteredBlocks'

const Contact = (
  <>
    <section>
      <p>Feel free to contact me on:</p>
    </section>
    <section>
      <CenteredBlocks>
        <Skill name="github" link="https://github.com/maartenbuwalda" />
        <Skill name="linkedin" link="https://www.linkedin.com/in/maartenbuwalda/" />
        <Skill name="email" link="mailto:maarten@maartenbuwalda.com" />
      </CenteredBlocks>
    </section>
  </>
)

export default Contact
