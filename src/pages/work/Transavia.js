import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'

export const Transavia = (
  <>
    <section>
      <h2>Transavia</h2>
      <p>My first assignment as an external front-end developer. Transavia is a Dutch low-cost airline, focused on having the best online experience. Transavia's stack has been focused around Sitecore for many years, and one of their steps forward was to move their front-end stack towards React and have a more API based architecture.</p>
    </section>
    <section>
      <h3>My role</h3>
      <p>I came to work at Transavia as the first React developer. They already made a proof of concept to move their stack to React, and I was here to continue and improve their work. Most of my time at Transavia was spent on adding new features, refactoring, removing codesmells and bugs, and increasing code coverage. Next to that, I had a substantial role in setting up two new React + Redux applications and a component library. Of course part of the job was also to fix bugs in the existing website (transavia.com).</p>
    </section>
    <section>
      <h3>What I used here:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="redux" />
        <Skill name="jest" />
        <Skill name="storybook" />
        <Skill name="sass" />
        <Skill name="javascript" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>What I worked on:</h3>
      <ul>
        <li>
          <h4>Group Offer Solution</h4>
          <p>Transavia's first React application, built as a proof of concept and refactored by me to increase the quality for production. I also raised the code coverage from 0% to 70% before going to production in early 2019.</p>
        </li>
        <li>
          <h4>Cancel booking</h4>
          <p>a small React + Redux application that enables users to more easily cancel their booking.</p>
        </li>
        <li>
          <h4>Partner Platform</h4>
          <p>a first setup of connecting and combining all existing partner (B2B) applications, which are built with different stacks. The goal is to move all these applications to the same stack: React + Redux.</p>
        </li>
        <li>
          <h4>TFS Component Library</h4>
          <p>we built this component library with React, Storybook, Lerna and Azure registry with Artifacts. Its purpose is to provide reusable, tested front-end components which will make it easier to build and unite the front-end stack of the Transavia applications.</p>
        </li>
      </ul>
    </section>
  </>
)
