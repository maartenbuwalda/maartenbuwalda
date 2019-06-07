import React from 'react'
import Skill from '../components/Skill'
import CenteredBlocks from '../components/CenteredBlocks'

const Contact = (
  <>
    <section>
      <h1>Contact</h1>
      <p>I (almost) never respond to recruitment emails, but feel free to reach out to me. I also have some online presence on github and linkedin. Check out my profiles below.</p>
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
