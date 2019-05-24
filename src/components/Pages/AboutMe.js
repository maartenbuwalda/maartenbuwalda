import React from 'react'
import CenteredBlocks from '../CenteredBlocks'
import Skill from '../Skill'

const AboutMe = (
  <>
    <section>
      <h2>"If you say one thing for me, say that..."</h2>
      <p>
        I'm a front-end developer. Born in 1989 in the Netherlands. I've been doing "things" on the web since 2006, ever since I started my first study in Multimedia Design. Since 2012 I've been focused on front-end development when I started my bachelor in Communication and Multimedia Design. This all took off with the basics of HTML5, JavaScript and CSS3. Nearing the end of my studies, I picked up my first JS framework called Ember. A few months later, I switched to React. Three years later, I'm still using React and I'm still loving it.
      </p>
    </section>
    <section>
      <h3>You can say I know a thing or two about:</h3>
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
        <Skill name="webpack" />
        <Skill name="scrum" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>You could also say that</h3>
      <p>
        I love reading fantasy books (you may or may not notice some hints). I used to write when I was a student, but I kinda forgot about that. I'm an amateur gardener, an average sportsman and an avid gamer (PC and PS4). I love animals and I stopped eating them.
      </p>
    </section>
  </>
)

export default AboutMe
