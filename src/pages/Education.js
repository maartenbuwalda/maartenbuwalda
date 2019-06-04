import React from 'react'
import Tags from '../components/Tags'
import { Link } from 'react-router-dom'

const Education = (
  <>
    <section>
      <h1>My education</h1>
      <p>
        A big chunk of my life has been spent on studying (I still consider myself young), until I finished my bachelor's in 2016. Most of my education was focused on multimedia design. There is a gap period in which I was trying something else, but I was quickly cured. Let's start at the beginning:
      </p>
    </section>
    <section>
      <ul>
        <li>
          <h3>Multimedia Design</h3>
          <Tags inverted list={['2006-2010', 'MediaCollege Amsterdam']} />
          <p>After finishing high school, I seemed to have learned only two things: I liked drawing and I liked computers. I chose a study in Multimedia Design because it involved both. Here I mostly learned how to use the Adobe software, how to do web design, play games, make cool animations, and the very basics of HTML and CSS. During this time I really liked to use Flash, so I also learned some ActionScript, which later helped me to understand JavaScript a bit more easily.</p>
        </li>
        <li>
          <h3>Two wine tasting courses (yes)</h3>
          <Tags inverted list={['2010-2011', 'Curaçao']} />
          <p>Finishing my first study gave me the time and opportunity to move to Curaçao for a year, together with my family. I finished two wine courses during my stay, but this was clearly just for fun. I learned how to scuba dive, and I also got my driver's license on this island. And yes, I can drive.</p>
        </li>
        <li>
          <h3>Human Resource Management</h3>
          <Tags inverted list={['2011', 'Amsterdam University of Applied Sciences']} />
          <p>After my short break, I was confused and wanted to study something else. I decided to do HR. Nearing a mild depression and the end of the first year, I realised this was just not laid out for me. Luckily during this time I started the Creative Writing course, where I could use all my creativity. I quit HR and applied for Communication and Multimedia Design.</p>
        </li>
        <li>
          <h3>Studium Excellence: Creative Writing</h3>
          <Tags inverted list={['2011-2012', 'Amsterdam University of Applied Sciences']} />
          <p>This extracurricular course was something special, and is still very valuable to me. During my HR studies, I devoted my free time to this. Every week I had a writing assignment, which varied from type of text, word count and topics. Every wednesday I took my assignment to the evening class and read it before the group, after which the writing teacher would do corrections and suggestions to improve. This course triggered my creativity, taught me a lot about storytelling and gave me more confidence to speak in front of groups.</p>
        </li>
        <li>
          <h3>Communication and Multimedia Design</h3>
          <Tags inverted list={['2012-2016', 'Amsterdam University of Applied Sciences']} />
          <p>CMD is quite a broad study. Its core was interaction design, but it branched out to UX design, front-end development, content management and visual design. During my first year, I already made the decision to go for front-end development, and I had lots of fun getting back into this. During the first years, I learned most of HTML5, CSS3 and JavaScript. In the second year I started looking for front-end jobs for 1-2 days per week, and those jobs taught me much more (mostly how not to do it). In the third year I chose to do a minor in Game Design. I love games. My fourth year was spent on doing my internship and thesis at Wakoopa, and my <Link to="/work">professional career</Link> took off from there.</p>
        </li>
      </ul>
    </section>
  </>
)

export default Education
