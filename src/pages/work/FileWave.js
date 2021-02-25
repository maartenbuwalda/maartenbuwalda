import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Tags from '../../components/Tags'

export const FileWave = (
  <>
    <section>
      <h1>FileWave</h1>
      <Tags inverted list={['2019-now']} />
      <p>FileWave offers management solution for apps, devices and configurations for Mac, Windows and mobile. In september 2019 I started my first remote job at FileWave. This application has been built over the past three years, using React, Redux, styled-components, and Formik.</p>
    </section>
    <section>
      <h3>Using:</h3>
      <CenteredBlocks>
        <Skill name="react" />
        <Skill name="redux" />
        <Skill name="typescript" />
        <Skill name="jest" />
        <Skill name="testing-library" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>My role</h3>
      <p>As one of the React engineers, my job is mainly to implement new features into the brand new FileWave Web Admin application. Next to that, I focus a lot on refactoring and improving mostly the code quality, scalability, reusability and tests. Currently I am on the Windows MDM team, implementing new Windows based features into the product.</p>
    </section>
    <section>
      <h3>What I'm working on:</h3>
      <ul>
        <li>
          <h4>FileWave Web Admin</h4>
          <Tags list={['React', 'Typescript', 'Redux', 'jest', 'react-testing-library', 'scss']} />
          <p>This web application mostly offers the same features as the long running FileWave Native Admin, with an improved UI. This product has been built in the past ~3 years, and early choices in the project also needed to be revisited. For instance regular JavaScript has to be replaced by TypeScript. Components ended up being deeply nested, and in some cases they became too complex. Correctly splitting up the components and typing them helps a lot in finding and preventing issues, and has improved the reusability and scalability of the code. Some other choices also needed to be refactored, such as styled-components separated into scss files, enzyme replaced by react-testing-library and react-refetch replaced by axios</p>
        </li>
        <li>
          <h4>Dashboard</h4>
          <Tags list={['Grafana', 'React', 'Typescript', 'jest', 'react-testing-library', 'scss']} />
          <p>Another important part of the FileWave product is its dashboard, which is built on Grafana. I spent a short time working on this, focused on building custom data visualisation components using React and TypeScript.</p>
        </li>
        <li>
          <h4>Windows MDM</h4>
          <Tags list={['React', 'Typescript', 'Redux', 'react-testing-library', 'scss', 'Windows MDM']} />
          <p>My current job is at the Windows MDM team, working on Windows based features. Most of these features are new to FileWave. </p>
        </li>
      </ul>
    </section>
  </>
)
