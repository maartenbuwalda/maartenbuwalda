import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Link from '../../components/Link'

export const GoFort = (
  <>
    <section>
      <h1>Go Fort</h1>
      <p><Link href="http://www.go-fort.nl">This</Link> was a small side project that I've done for my father's company. I had been doing React for a few months, and I wanted to test my skills on this website. My brother created the logo, which I still think is pretty cool.</p>
      <p>I used create-react-app to setup the project (I ejected it, for some reason). For the styling I used SASS.</p>
    </section>
    <section>
      <h3>What I used here:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="sass" />
        <Skill name="javascript" />
      </CenteredBlocks>
    </section>
  </>
)
