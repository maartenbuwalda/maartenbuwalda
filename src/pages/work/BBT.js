import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Link from '../../components/Link'

export const BBT = (
  <>
    <section>
      <h1>Battlefield Bus Tours</h1>
      <p><Link href="http://www.battlefieldbustours.nl">BBT</Link> is a touring company which travels to WW1 and WW2 sites such as Normandy, the Ardennes and Auschwitz. This company is owned and ran by my girlfriend. Previously I've made improvements to her existing, self-made WordPress website, but recently I've built her a brand new website using Gatsby.</p>
      <p>I am using Gatsby as a static site generator, so I can optimize the SEO. Gatsby also enables the usage of React. You are welcome to take a look at the website <Link href="https://battlefieldbustours.nl">here</Link>.</p>
      <p>Recently I started optimizing the back-end of the website, which I've built with node and mongodb, and expand it to support an automated booking system. Covid has put the tours on hold, so there is time and opportunity to improve these processes. I am still building this system, which should eventually allow my girlfriend to manage her tours, bookings and payments.</p>
    </section>
    <section>
      <CenteredBlocks>
        <Skill name="gatsby" />
        <Skill name="react" />
        <Skill name="javascript" />
        <Skill name="css3" />
        <Skill name="html5" />
        <Skill name="wordpress" />
        <Skill name="mongodb" />
        <Skill name="node" />
      </CenteredBlocks>
    </section>
  </>
)
