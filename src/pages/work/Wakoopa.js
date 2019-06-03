import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'

export const Wakoopa = (
  <>
    <section>
      <h2>Wakoopa</h2>
      <p>Wakoopa is an international software company focused on market research. The Wakoopa software is used by market research companies to measure online behavior. In 2015 I started at Wakoopa to do my internship and thesis, and afterwards I stayed two more years as a front-end developer.</p>
    </section>
    <section>
      <h3>What I used here:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="react native" />
        <Skill name="redux" />
        <Skill name="jest" />
        <Skill name="middleman" />
        <Skill name="ember" />
        <Skill name="storybook" />
        <Skill name="d3" />
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
          <p>a panel management tool built with Ember. I got to work on this since the start of my internship, and later made a redesign for it. I learned Ember and added multiple feature to this application.
          </p>
        </li>
        <li>
          <h4>Bowser</h4>
          <p>a browser plugin which helps to install the tracking software into the browser. I built its front-end with React + Redux, and unit tested with Jest.
          </p>
        </li>
        <li>
          <h4>Conker</h4>
          <p>a React Native + Redux application which helps the user to install the tracking software on an iOS device. I worked on this project in the early days of React Native, so it was a lot of experimenting and refactoring. Eventually it was a nice and small application, fully tested with Jest.
          </p>
        </li>
        <li>
          <h4>Wart (protip: don't google this word)</h4>
          <p>a React component library using Storybook. We created this library so we could more easily build React applications, and refactor existing apps to the React stack.
          </p>
        </li>
        <li>
          <h4>Auth0 thing</h4>
          <p>...</p>
        </li>
        <li>
          <h4>Menno</h4>
          <p>a chatbot type application which enables the user/client to access market research data. I built this app with React + Redux, D3, Styled-Components and Dialogflow.
          </p>
        </li>
        <li>A few basic websites using Middleman and SASS</li>
        <li>My thesis</li>
      </ul>
    </section>
  </>
)
