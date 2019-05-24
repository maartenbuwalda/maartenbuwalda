import React from 'react'
import images from '../../../constants/images'
import CenteredBlocks from '../../CenteredBlocks'
import Skill from '../../Skill'

const content = (
  <>
    <section>
      <h2>Transavia</h2>
      <p>Transavia was my first project as an external developer. I started working on a new application called the "Group Offer Solution", which is meant to automate the group booking feature of the website. Next to that, I had a big role in starting three smaller applications: the Partner Platform, a React Component Library and Cancel Booking. Of course part of the job was also to fix bugs in the existing website (transavia.com).</p>
    </section>
    <section>
      <CenteredBlocks>
        <Skill name="react">
          Built multiple React applications.
        </Skill>
        <Skill name="redux">
          Implemented Redux in existing and new applications.
        </Skill>
        <Skill name="jest">
          Increased the code coverage of an existing application from 0 to 70%.
        </Skill>
      </CenteredBlocks>
    </section>
    <section>
      <h3>Group Booking Solution (GOS)</h3>
      <p>De ontwikkeling van GOS was begonnen in november 2017 door beginnende React developers. Ze bouwden een proof of concept om te laten zien dat React de toekomst was voor de front-end van Transavia, en dat is ze gelukt. In het begin werd de keuze gemaakt om het project puur React te houden zodat de developers React konden leren, waardoor er bijvoorbeeld ook geen state management tool geïmplementeerd was. De fundering was daardoor technical debt en daar werd drie maanden op verder gebouwd. Toen ik in februari aan de slag kon, ben ik features blijven toevoegen en alles wat ik daarbij tegenkwam ben ik gaan refactoren om zo de code quality te verbeteren. Uiteindelijk kreeg ik de tijd om het roer om te gooien en Redux aan de applicatie toe te voegen. Ook ben ik gaandeweg unit tests gaan schrijven met Jest en Enzyme, waardoor de code coverage van 0% naar 70% is gestegen.</p>
    </section>
    <section>
      <h3>Het Partner Platform en de React Component Library</h3>
      <p>De partners van Transavia zijn bijvoorbeeld reisbureaus die een groot aantal boekingen maken voor hun eigen reisaanbod. Voor deze partners zijn verschillende applicaties gebouwd, waaronder GOS. Omdat dit allemaal losse applicaties zijn, ontstond het idee om ze samen te voegen onder het kopje Partner Platform. Dit zou een dashboard worden, van waaruit alle partner applicaties te gebruiken zijn. Het probleem is dat niet alle applicaties met dezelfde technieken zijn gebouwd, en dus niet zo eenvoudig samen te voegen zijn. Een tijdelijke oplossing was om een identieke “navigatie banner” boven elke app te injecteren en op deze manier de apps naar elkaar te laten linken en daarmee het gevoel te geven dat het bestond uit een geheel. Om dit in vier verschillende apps op een effectieve manier te doen, ontstond de behoefte a6an een front-end component library. Deze library heb ik vervolgens samen met een andere front-end developer opgezet met webpack, storybook, lerna, react en Azure artifacts. Dit gaf ons uiteindelijk de mogelijkheid om heel simpel het component te importeren, de benodigde data eraan mee te geven en te renderen in elke applicatie.</p>
    </section>
  </>
)

export default {
  content,
  title: 'Transavia',
  image: images.transavia,
}
