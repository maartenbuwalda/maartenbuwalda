import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'

export const BBT = (
  <>
    <section>
      <h2>Battlefield Bus Tours</h2>
      <p>BBT is a touring company which travels to WW2 sites such as Normandy, the Ardennes and Auschwitz. This company is owned and ran by my girlfriend. I've made improvements to her existing, self-made WordPress website, but I next to that I'm building a new website from scratch.</p>
    </section>
    <section>
      <CenteredBlocks>
        <Skill name="gatsby" />
        <Skill name="react" />
        <Skill name="javascript" />
        <Skill name="css3" />
        <Skill name="html5" />
        <Skill name="wordpress" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>What</h3>
      <p>I am using Gatsby as a static site generator, so I can optimize the SEO. Also because I can use React, which is my favorite. This is still in progress, but you can check out my progress here.</p>
    </section>
  </>
)
