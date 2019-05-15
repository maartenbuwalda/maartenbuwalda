import React from 'react'
import images from '../../../constants/images'

const content = (
  <>
    <h2>Transavia</h2>
    <p>Februari 2018 - maart 2019: Transavia</p>
    <p>Bij Transavia begon ik aan mijn eerste project als gedetacheerde. Ik kwam te werken aan een nieuwe tool die bedoeld is om het proces van groepsboekingen te automatiseren: de Group Booking Solution (GOS). Daarnaast heb ik een grote rol gespeeld in het starten van twee kleinere projecten: het Partner Platform en een React Component Library. Tot slot heb ik bijgedragen aan het oplossen van bugs op transavia.com.</p>

    <h3>Group Booking Solution (GOS)</h3>
    <p>De ontwikkeling van GOS was begonnen in november 2017 door beginnende React developers. Ze bouwden een proof of concept om te laten zien dat React de toekomst was voor de front-end van Transavia, en dat is ze gelukt. In het begin werd de keuze gemaakt om het project puur React te houden zodat de developers React konden leren, waardoor er bijvoorbeeld ook geen state management tool geïmplementeerd was. De fundering was daardoor technical debt en daar werd drie maanden op verder gebouwd. Toen ik in februari aan de slag kon, ben ik features blijven toevoegen en alles wat ik daarbij tegenkwam ben ik gaan refactoren om zo de code quality te verbeteren. Uiteindelijk kreeg ik de tijd om het roer om te gooien en Redux aan de applicatie toe te voegen. Ook ben ik gaandeweg unit tests gaan schrijven met Jest en Enzyme, waardoor de code coverage van 0% naar 70% is gestegen.</p>

    <h3>Het Partner Platform en de React Component Library</h3>
    <p>De partners van Transavia zijn bijvoorbeeld reisbureaus die een groot aantal boekingen maken voor hun eigen reisaanbod. Voor deze partners zijn verschillende applicaties gebouwd, waaronder GOS. Omdat dit allemaal losse applicaties zijn, ontstond het idee om ze samen te voegen onder het kopje Partner Platform. Dit zou een dashboard worden, van waaruit alle partner applicaties te gebruiken zijn. Het probleem is dat niet alle applicaties met dezelfde technieken zijn gebouwd, en dus niet zo eenvoudig samen te voegen zijn. Een tijdelijke oplossing was om een identieke “navigatie banner” boven elke app te injecteren en op deze manier de apps naar elkaar te laten linken en daarmee het gevoel te geven dat het bestond uit een geheel. Om dit in vier verschillende apps op een effectieve manier te doen, ontstond de behoefte aan een front-end component library. Deze library heb ik vervolgens samen met een andere front-end developer opgezet met webpack, storybook, lerna, react en Azure artifacts. Dit gaf ons uiteindelijk de mogelijkheid om heel simpel het component te importeren, de benodigde data eraan mee te geven en te renderen in elke applicatie.</p>
  </>
)

export default {
  content,
  title: 'Transavia',
  image: images.transavia,
}
