import React from 'react'
import CenteredBlocks from '../../CenteredBlocks'
import Skill from '../../Skill'

export const Transavia = (
  <>
    <section>
      <h2>Transavia</h2>
      <p>Transavia was my first project as an external developer. I started working on a new application called the "Group Offer Solution", which is meant to automate the group booking feature of the website. Next to that, I had a big role in setting up two new applications and a component library. Of course part of the job was also to fix bugs in the existing website (transavia.com).</p>
    </section>
    <section>
      <CenteredBlocks>
        <Skill name="react">
          Built multiple React applications.
        </Skill>
        <Skill name="redux">
          Implemented Redux in existing and new applications.
        </Skill>
        <Skill name="jest">
          Increased the code coverage of an existing application from 0 to 70%.
        </Skill>
        <Skill name="storybook" />
        <Skill name="sass" />
        <Skill name="javascript" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>What</h3>
      <p>The three applications I worked on at Transavia were built with React and Redux. We created the component library using React, Storybook and an Azure registry with Artifacts</p>
    </section>
  </>
)
