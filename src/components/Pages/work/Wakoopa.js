import React from 'react'
import images from '../../../constants/images'
import CenteredBlocks from '../../CenteredBlocks'
import Skill from '../../Skill'

const content = (
  <>
    <section>
      <h2>Wakoopa</h2>
      <p>Wakoopa is een klein, internationaal software bedrijf dat zich heeft gevestigd binnen de marktonderzoeksbranche. De Wakoopa software wordt door marktonderzoeksbedrijven gebruikt om online gedrag te meten. Ik begon bij Wakoopa met mijn afstudeerstage in 2015, waarna ik nog twee jaar ben gebleven als volwaardig front-end developer.</p>
    </section>
    <section>
      <h3>Stack</h3>
      <CenteredBlocks>
        <Skill vendor="react" />
        <Skill vendor="react native" />
        <Skill vendor="redux" />
        <Skill vendor="jest" />
        <Skill vendor="middleman" />
        <Skill vendor="ember" />
        <Skill vendor="storybook" />
      </CenteredBlocks>
    </section>
    <section>
      <h3>What</h3>
      <p>Mijn verantwoordelijkheden lagen vooral bij het ontwikkelen van de front-end van verschillende web-applicaties en een iOS app. Hier heb ik geleerd om met Ember.js, React en React Native te werken. Later kwam hierbij dat ik verantwoordelijkheid kreeg voor het verbeteren van de UX en interface design van verschillende management applicaties. Ik werkte hier in een klein team, bestaande uit front-end, UX, back-end en QA. Dit team was gevestigd op twee locaties: Amsterdam en Barcelona. Hierdoor was goede communicatie belangrijk, dus we hielden vaak videoconferenties. We kregen in het front-end team veel vrijheid op gebied van techniek, waardoor ik veel verschillende dingen heb kunnen leren.
      </p>
    </section>
  </>
)

export default {
  content,
  title: 'Transavia',
  image: images.transavia,
}
