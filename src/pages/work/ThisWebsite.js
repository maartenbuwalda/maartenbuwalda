import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Link from '../../components/Link'

export const ThisWebsite = (
  <>
    <section>
      <h1>My own website</h1>
      <p>I made this very website to play around and try some things I didn't get the chance to try before. At the start, I mostly wanted to learn more about setting up my own Webpack project and optimize it. I wanted to use React hooks and React Context, which handles all the dynamic colors based on the dominant colors from the image at the top. Next to that, I used Styled-Components and some more Jest to increase my testing skills, although the components are very simple. Check it out <Link href="https://github.com/maartenbuwalda/maartenbuwalda">here</Link>.</p>
    </section>
    <section>
      <h3>What I used here:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="jest" />
        <Skill name="javascript" />
        <Skill name="styled components" />
        <Skill name="webpack" />
        <Skill name="node" />
      </CenteredBlocks>
    </section>
  </>
)
