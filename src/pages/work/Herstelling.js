import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'

export const Herstelling = (
  <>
    <section>
      <h2>Stichting Herstelling</h2>
      <p>Herstelling is a foundation which helps (semi criminal) people back into society. My father started working here as a project manager after his career at the Dutch marines, and I got to renew their website. It used to be an old WordPress website, and I replaced it by building a new website from scratch.</p>
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
