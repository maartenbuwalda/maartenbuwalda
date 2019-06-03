import React from 'react'
import CenteredBlocks from '../components/CenteredBlocks'
import Skill from '../components/Skill'

const AboutMe = (
  <>
    <section>
      <h2>My story</h2>
      <p>
        Born in 1989 in the Netherlands. Since 2006 I've been doing "things" on the web when I started my first study in Multimedia Design. I've been more seriously focused on front-end developement since 2012, when I started my bachelor in Communication and Multimedia Design. In 2014 I took my first job as front-end developer, and the rest is history.
      </p>
    </section>
    <section>
      <h3>I know a thing or two about:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="react native" />
        <Skill name="redux" />
        <Skill name="jest" />
        <Skill name="storybook" />
        <Skill name="html5" />
        <Skill name="css3" />
        <Skill name="javascript" />
        <Skill name="middleman" />
        <Skill name="ember" />
        <Skill name="d3" />
      </CenteredBlocks>
      <h3>I'm currently learning:</h3>
      <CenteredBlocks>
        <Skill name="next" />
        <Skill name="typescript" />
        <Skill name="gatsby" />
        <Skill name="webpack" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>Some more details</h3>
      <p>
        I love reading fantasy books. I used to write when I was a student, but I kinda forgot about that. I'm an amateur gardener, an average sportsman and an avid gamer (PC and PS4). I love animals and I stopped eating them.
      </p>
    </section>
  </>
)

export default AboutMe
