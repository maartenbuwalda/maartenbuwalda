import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Tags from '../../components/Tags'

export const Fontem = (
  <>
    <section>
      <h1>Fontem Ventures</h1>
      <Tags inverted list={['2019', 'project-based']} />
      <p>Fontem is part of Imperial Tobacco. Its main product is <a href="https://www.blu.com" rel="noopener noreferrer" target="_blank">blu</a>, a vaping device. Since march 2019 I've been working for them as part of the "acceleration program". This program is focused on refactoring and improving the website, which should ultimately lead to an increase of the traffic. The "legacy" stack exists of React, Styled Components and Gatsby. The new stack will be: React, Styled Components, TypeScript and Next.js.</p>
    </section>
    <section>
      <h3>Using and learning:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="typescript" />
        <Skill name="jest" />
        <Skill name="node" />
        <Skill name="next" />
        <Skill name="styled components" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>My role</h3>
      <p>The acceleration program works in a very start-up way, which means that my role has been very flexible. I started out by having responsibility over forms on the website, like registration and login forms. After this was mostly done, I switched to optimising SEO.</p>
    </section>
    <section>
      <h3>What I worked on:</h3>
      <ul>
        <li>
          <h4>Website re-platform</h4>
          <Tags list={['React', 'Typescript', 'Jest', 'Next.js', 'styled-components']} />
          <p>Part of my job at Fontem Ventures was to refactor existing pages from JavaScript to TypeScript. Some pages are coming from tools like DemandWare, and these pages needed to be built from scratch. Doing this, I am learning more about TypeScript, which I never used before this project.</p>
        </li>
        <li>
          <h4>SEO</h4>
          <Tags list={['Node', 'Next.js']} />
          <p>Another important part of the big refactor was to improve the SEO. Like TypeScript, I have never really worked that much on this subject, so I am happy and eager to learn about this.</p>
        </li>
      </ul>
    </section>
  </>
)
