import React from 'react'
import CenteredBlocks from '../../components/CenteredBlocks'
import Skill from '../../components/Skill'
import Tags from '../../components/Tags'

export const Dinst = (
  <>
    <section>
      <h1>Dinst</h1>
      <Tags inverted list={['2014-2015']} />
      <p>Dinst was a social start-up focused on creating a platform for people who needed help at home. For instance, a carpenter could offer his/her services online, and anyone could get in contact for a task at home that needed fixing.</p>
    </section>
    <section>
      <h2>Used tools:</h2>
      <CenteredBlocks>
        <Skill name="css3" />
        <Skill name="javascript" />
        <Skill name="joomla" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>My role</h3>
      <p>Working here was one of my first experiences as a front-end developer. It was a part-time job during my second and third year of university. Dinst was a young start-up, which meant my role was very flexible. I continued developing their platform, and I was also making designs used for pitched and ideas.</p>
      <p>Unfortunately after 1.5 years I had to move away from Dinst to continue my studies and start my internship elsewhere.</p>
    </section>
    <section>
      <h3>What I worked on:</h3>
      <ul>
        <li>
          <h4>Dinst platform</h4>
          <Tags list={['joomla', 'css3', 'javascript']} />
          <p>The Dinst platform was built by themselves with Joomla, which I continued to improve using JavaScript, HTML5 and CSS3.</p>
        </li>
        <li>
          <h4>Design mock-ups</h4>
          <Tags list={['Adobe illustrator']} />
          <p> Dinst was also trying to get funding by competing in a "Rockstart" acceleration program. I created wireframes, design mock-ups and contributed to their cool ideas. Finally they won the program and gained investments!</p>
        </li>
      </ul>
    </section>
  </>
)
