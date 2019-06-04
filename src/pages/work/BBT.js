import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Link from '../../components/Link'

export const BBT = (
  <>
    <section>
      <h1>Battlefield Bus Tours</h1>
      <p><Link href="http://www.battlefieldbustours.nl">BBT</Link> is a touring company which travels to WW2 sites such as Normandy, the Ardennes and Auschwitz. This company is owned and ran by my girlfriend. I've made improvements to her existing, self-made WordPress website, but I next to that I'm building a new website from scratch.</p>
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
      <p>I am using Gatsby as a static site generator, so I can optimize the SEO. This also enables the use of React. This website is still in progress, but you can check out my progress <Link href="https://github.com/maartenbuwalda/battlefieldbustours">here</Link>.</p>
    </section>
  </>
)
