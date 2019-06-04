import React from 'react'
import CenteredBlocks from '../components/CenteredBlocks'
import Skill from '../components/Skill'

const AboutMe = (
  <>
    <section>
      <h1>A summary of me</h1>
      <p>
        I was born in 1989 in Amstelveen, the Netherlands. Since 2006 I've been creating stuff on the web. I've been more seriously focused on front-end development since 2012, when I started my bachelor in Communication and Multimedia Design. In 2014 I took my first part-time job as front-end developer, and I've been working full-time since 2015. Since then my focus has been developing web applications. My first JS framework was Ember, but I moved to React shortly after, and I still very much like to work with it.
      </p>
      <p>
        Other than that: I love reading fantasy books. I used to write when I was a student, and want to pick it up again eversince. I'm an amateur gardener, an average sportsman and an avid gamer (PC and PS4).
      </p>
    </section>
    <section>
      <h3>I have worked with:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="react native" />
        <Skill name="redux" />
        <Skill name="jest" />
        <Skill name="storybook" />
        <Skill name="html5" />
        <Skill name="css3" />
        <Skill name="sass" />
        <Skill name="javascript" />
        <Skill name="middleman" />
        <Skill name="ember" />
        <Skill name="d3" />
        <Skill name="styled components" />
      </CenteredBlocks>
      <h3>I'm currently working with and learning:</h3>
      <CenteredBlocks>
        <Skill name="next" />
        <Skill name="typescript" />
        <Skill name="gatsby" />
        <Skill name="webpack" />
      </CenteredBlocks>
    </section>
  </>
)

export default AboutMe
