import React from 'react'
import images from '../../../constants/images'
import CenteredBlocks from '../../CenteredBlocks'
import Skill from '../../Skill'

const content = (
  <>
    <section>
      <h2>Wakoopa</h2>
      <p>Wakoopa is/was a small, international software company focused on market research. The Wakoopa software is used by market research companies to measure online behavior. In 2015 I started at Wakoopa to do my internship and thesis, and afterwards I stayed two more years as a front-end developer.</p>
    </section>
    <section>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="react native" />
        <Skill name="redux" />
        <Skill name="jest" />
        <Skill name="middleman" />
        <Skill name="ember" />
        <Skill name="storybook" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>What</h3>
      <p>My responsibilities were focused upon developing multiple web applications, websites and an iOS app (React Native). In this role I learned a lot about working with React, React Native, Middleman and Ember. Later I also got the responsibility to improve the UX and interface design of the management applications. I was working in a small team existing of front-end, back-end, UX and QA. The team was located in two locations: Amsterdam and Barcelona. Communication was important, so we had daily video calls. Front-end-wise we had a lot of freedom, so I learned a lot about different tools and techniques.</p>
    </section>
  </>
)

export default {
  content,
  title: 'Transavia',
  image: images.transavia,
}
