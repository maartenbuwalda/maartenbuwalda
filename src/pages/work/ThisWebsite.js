import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'

export const ThisWebsite = (
  <>
    <section>
      <h2>Yes, this website</h2>
      <p>I made this website to play around and try some thing I didn't get the chance to try before. At the start, I mostly wanted to learn more about setting up my own Webpack project and optimize it. I used React Context, which handles all the dynamic colors based on the dominant colors from the image at the top. Next to that, I used Styled-Components and more Jest to increase my testing skills.</p>
    </section>
    <section>
      <h3>What I used here:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="jest" />
        <Skill name="javascript" />
        <Skill name="webpack" />
        <Skill name="node" />
      </CenteredBlocks>
    </section>
  </>
)
