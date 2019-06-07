import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Tags from '../../components/Tags'
import Link from '../../components/Link'

export const Wakoopa = (
  <>
    <section>
      <h1>Wakoopa</h1>
      <Tags inverted list={['2015-2017']} />
      <p><Link href="http://www.wakoopa.com">Wakoopa</Link> is an international software company focused on market research. The Wakoopa software is used by market research companies to measure online behavior. In 2015 I started at Wakoopa to do my internship and thesis, and afterwards I stayed two more years as a front-end developer.</p>
    </section>
    <section>
      <h3>Used tools:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="react native" />
        <Skill name="redux" />
        <Skill name="jest" />
        <Skill name="middleman" />
        <Skill name="ember" />
        <Skill name="storybook" />
        <Skill name="d3" />
        <Skill name="styled components" />
        <Skill name="sketch" />
        <Skill name="sass" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>My role</h3>
      <p>My responsibilities were focused upon developing multiple web applications (Ember and React) and an iOS app (React Native). Each of these applications were connected to Ruby on Rails APIs. The team I was working with included front-end, back-end, UX and QA. In a later stage, I also picked up some responsibilities to improve the designs of existing interfaces.</p>
    </section>
    <section>
      <h3>What I worked on:</h3>
      <ul>
        <li>
          <h4>Rosalina</h4>
          <Tags list={['Ember']} />
          <p>A panel management tool built with Ember. I got to work on this since the start of my internship, and later made a redesign for it. I learned Ember and added multiple feature to this application.
          </p>
        </li>
        <li>
          <h4>Bowser</h4>
          <Tags list={['React', 'Redux', 'Jest']} />
          <p>A browser plugin which helps to install the tracking software into the browser. I built its front-end with React + Redux, and unit tested with Jest.
          </p>
        </li>
        <li>
          <h4>Conker</h4>
          <Tags list={['React Native', 'Redux', 'Jest']} />
          <p>A React Native + Redux application which helps the user to install the tracking software on an iOS device. I worked on this project in the early days of React Native, so it was a lot of experimenting and refactoring. Eventually it was a nice and small application, fully tested with Jest.
          </p>
        </li>
        <li>
          <h4>Wart (protip: do not Google this word)</h4>
          <Tags list={['React', 'Storybook']} />
          <p>A React component library using Storybook. We created this library so we could more easily build React applications, and refactor existing apps to the React stack.
          </p>
        </li>
        <li>
          <h4>Menno</h4>
          <Tags list={['React', 'Redux', 'styled-components', 'D3', 'Dialogflow']} />
          <p>A chatbot type application which enables the user/client to access market research data. I built this app with React + Redux, D3, Styled-Components and Dialogflow.
          </p>
        </li>
        <li>
          <h4>Wakoopa's behavioral data conference websites</h4>
          <Tags list={['Middleman', 'SASS']} />
          <p>Wakoopa organized world's first behavioral data conference, and I got to make its website. The preceding day, they also organized a datathon and its winners were invited to present their work on the conference. I created websites for both events using Middleman and SASS.
          </p>
        </li>
        <li>
          <h4>My thesis</h4>
          <Tags list={['Sketch', 'D3']} />
          <p>My thesis was focused on designing a dashboard that would automate and display data involving the UX of the Wakoopa products. To do so, I did a lot of research on dashboard design, about what needed to be measured and finally I created a complete design. Unfortunately I was never able to build the dashboard. However, my learnings about dashboard design might someday come in handy.</p>
        </li>
      </ul>
    </section>
  </>
)
