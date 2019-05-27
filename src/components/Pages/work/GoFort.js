import React from 'react'
import CenteredBlocks from '../../CenteredBlocks'
import Skill from '../../Skill'

export const GoFort = (
  <>
    <section>
      <h2>Go Fort</h2>
      <p>This was a small side project that I've done for my father's company within a few days. I had been doing React for a few months, and I wanted to test my skills on this website. My brother created the logo, which I still think is pretty cool.</p>
    </section>
    <section>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="sass" />
        <Skill name="javascript" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>What</h3>
      <p>I used create-react-app to setup the project (ejected for some reason). For the styling I used SASS.</p>
    </section>
  </>
)
