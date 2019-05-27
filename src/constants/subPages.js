import { Transavia } from '../pages/work/Transavia'
import { GoFort } from '../pages/work/GoFort'
import { Dinst } from '../pages/work/Dinst'
import { Wakoopa } from '../pages/work/Wakoopa'

import images from './images'

export const subPages = [
  {
    pathname: '/work/fontem-ventures',
    label: '2019: Fontem Ventures',
    title: 'Fontem Ventures',
    image: images.books,
    content: Transavia,
  },
  {
    pathname: '/work/battlefield-bus-tours',
    label: '2019: Battlefield Bus Tours',
    title: 'Battlefield Bus Tours',
    image: images.books,
    content: Transavia,
  },
  {
    pathname: '/work/transavia',
    label: '2018 - 2019: Transavia',
    title: 'Transavia',
    image: images.transavia,
    content: Transavia,
  },
  {
    pathname: '/work/stichting-herstelling',
    label: '2017: Stichting Herstelling',
    title: 'Stichting Herstelling',
    image: images.herstelling,
    content: Transavia,
  },
  {
    pathname: '/work/go-fort',
    label: '2017: Go Fort',
    title: 'Go Fort',
    image: images.fort,
    content: GoFort,
  },
  {
    pathname: '/work/wakoopa',
    label: '2015 - 2017: Wakoopa',
    title: 'Wakoopa',
    image: images.wkp,
    content: Wakoopa,
  },
  {
    pathname: '/work/dinst',
    label: '2014 - 2015: Dinst',
    title: 'Dinst',
    image: images.transavia,
    content: Dinst,
  },
]
