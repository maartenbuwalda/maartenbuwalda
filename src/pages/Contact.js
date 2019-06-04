import React from 'react'
import Skill from '../components/Skill'
import CenteredBlocks from '../components/CenteredBlocks'

const Contact = (
  <>
    <section>
      <h1>Contact</h1>
      <p>Feel free to reach out to me:</p>
      <CenteredBlocks>
        <Skill name="github" link="https://github.com/maartenbuwalda" />
        <Skill name="linkedin" link="https://www.linkedin.com/in/maartenbuwalda/" />
        <Skill name="email" link="mailto:maarten@maartenbuwalda.com" />
      </CenteredBlocks>
    </section>
  </>
)

export default Contact
