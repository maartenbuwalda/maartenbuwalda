import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Tags from '../../components/Tags'

export const Fontem = (
  <>
    <section>
      <h2>Fontem Ventures - project based</h2>
      <p>Fontem is part of Imperial Tobacco. Its main product is <a href="https://www.blu.com" rel="noopener noreferrer" target="_blank">blu</a>, a vaping device. Since march 2019 I've been working for them as part of the "acceleration program". This program is focused on refactoring and improving the website, which ultimately leads to an increase of the traffic and other KPIs. The "legacy" stack exists of React, Styled Components and Gatsby. The new stack will be: React, Styled Components, TypeScript and Next.js.</p>
    </section>
    <section>
      <h3>What I'm using and learning here:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="typescript" />
        <Skill name="jest" />
        <Skill name="node" />
        <Skill name="javascript" />
        <Skill name="next" />
        <Skill name="styled components" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>My role</h3>
      <p></p>
    </section>
    <section>
      <h3>What I'm working on:</h3>
      <ul>
        <li>
          <h4>Website re-platform</h4>
          <Tags list={['React', 'Typescript', 'Jest', 'Next.js', 'styled-components']} />
          <p>Part of my job here at Fontem is to refactor existing pages from JavaScript to TypeScript. Some pages are coming from tools like DemandWare, and these pages need to be built from scratch. Doing this, I am learning more about TypeScript, which I never used before this project.</p>
        </li>
        <li>
          <h4>SEO</h4>
          <Tags list={['Node', 'Next.js']} />
          <p>Another important part of the big refactor is to improve the SEO, which is now my main focus. Like TypeScript, I have never really focused that much on this subject, so I am happy and eager to learn about this.</p>
        </li>
      </ul>
    </section>
  </>
)
