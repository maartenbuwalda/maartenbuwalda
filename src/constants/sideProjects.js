import { Herstelling } from '../pages/work/Herstelling'
import { BBT } from '../pages/work/BBT'
import { GoFort } from '../pages/work/GoFort'
// import { ThisWebsite } from '../pages/work/ThisWebsite'
import images from './images'

export const sideProjects = [
  {
    pathname: '/side-projects/battlefield-bus-tours',
    type: 'work',
    label: '2018 - 2019: Battlefield Bus Tours',
    title: 'Battlefield Bus Tours',
    image: images.bbt,
    content: BBT,
  },
  // {
  //   pathname: '/side-projects/this-website',
  //   type: 'work',
  //   label: '2019: This website',
  //   title: 'This website',
  //   image: images.books,
  //   content: ThisWebsite,
  // },
  {
    pathname: '/side-projects/stichting-herstelling',
    type: 'work',
    label: '2017: Stichting Herstelling',
    title: 'Stichting Herstelling',
    image: images.herstelling,
    content: Herstelling,
  },
  {
    pathname: '/side-projects/go-fort',
    type: 'work',
    label: '2017: Go Fort',
    title: 'Go Fort',
    image: images.fort,
    content: GoFort,
  },
]
