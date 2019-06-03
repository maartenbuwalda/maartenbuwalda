import React from 'react'
import Tags from '../components/Tags'
import { Link } from 'react-router-dom'

const Education = (
  <>
    <section>
      <h2>My education</h2>
      <p>
        A big chunk of my life has been spent on studying (I still consider myself young), until I finished my bachelor's in 2016. Most of my education was focused around multimedia design. There is a gap year in which I was trying something else, but I was quickly reminded. I'll start at 2006, when I did my first things on the web. Buckle up, here we go.
      </p>
    </section>
    <section>
      <ul>
        <li>
          <h4>Multimedia Design</h4>
          <Tags inverted list={['2006-2010', 'MediaCollege Amsterdam']} />
          <p>After I finished high school, I knew two things: I liked drawing and I liked computers. I chose this study because it involved both. Here I mostly learned how to use most of the Adobe software, how to do web design, play games, make cool animations, and the very basics of HTML and CSS. During this time I really liked to use Flash, so I also learned some ActionScript, which later helped me to understand JavaScript a bit more easily.</p>
        </li>
        <li>
          <h4>Two wine tasting courses (yes)</h4>
          <Tags inverted list={['2010-2011', 'Curaçao']} />
          <p>Finishing my studies at MediaCollege gave me the opportunity to move to Curaçao for a year, together with my family. I finished two wine courses during my stay, but this was clearly just for fun. I learned to dive, and I also got my driver's license here. And yes, I can actually drive, thank you for asking.</p>
        </li>
        <li>
          <h4>Human Resource Management</h4>
          <Tags inverted list={['2011', 'Amsterdam University of Applied Sciences']} />
          <p>After my short break on Curaçao, I was confused and wanted to study something else. I decided to do HR. Nearing the end of the first year (and a mild depression), I realised this was just not laid out for me. Luckily during this time I started the Creative Writing course, where I could use all my creativity. I quit this study, and to this day it has been one of my best decisions in life.</p>
        </li>
        <li>
          <h4>Studium Excellence: Creative Writing</h4>
          <Tags inverted list={['2011-2012', 'Amsterdam University of Applied Sciences']} />
          <p>This extracurricular course was something special, and is still very valuable to me. I started with this during my HR studies, because my teachers thought I was doing well. Every week I had a writing assignment, which varied from type of text, word count and topics. Every wednesday I took my assignment to the evening class and had to read it out loud, after which the teacher would do corrections and suggestions to improve. This course triggered my creativity, taught me a lot about storytelling and speaking in front of groups.</p>
        </li>
        <li>
          <h4>Communication and Multimedia Design</h4>
          <Tags inverted list={['2012-2016', 'Amsterdam University of Applied Sciences']} />
          <p>CMD is quite a broad study. Its core was interaction design, but it branched out to UX, front-end development, content management and visual design. During my first year, I already made the decision to go for front-end development, and I had lots of fun getting back into this. During the first years, I learned most of HTML5, CSS3 and JavaScript. In the second year I started looking for front-end jobs for 1-2 days per week, and those jobs taught me much more (partly how not to do it). In the third year I chose to do a minor in Game Design, of course because I love games. My fourth year was spent on doing my internship and thesis at Wakoopa, and my <Link to="/work">professional career</Link> took off from there.</p>
        </li>
      </ul>
    </section>
  </>
)

export default Education
