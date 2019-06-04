import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Link from '../../components/Link'

export const Herstelling = (
  <>
    <section>
      <h1>Stichting Herstelling</h1>
      <p><Link href="http://www.herstelling.nl">Herstelling</Link> is a foundation which helps (semi criminal) people back into society. My father started working here when he retired from the marines, and I got the priviledge to renew their website. It used to be an old WordPress website, and I replaced it by building a new website from scratch.</p>
      <p>I used Middleman as static site generator. I also used Middleman because I wanted to easily reuse pieces of code, and the website had to be optimized for search engines.</p>
    </section>
    <section>
      <h3>What I used here:</h3>
      <CenteredBlocks>
        <Skill name="middleman" />
        <Skill name="sass" />
        <Skill name="javascript" />
      </CenteredBlocks>
    </section>
  </>
)
