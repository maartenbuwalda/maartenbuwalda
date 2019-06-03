import { Transavia } from '../pages/work/Transavia'
import { Dinst } from '../pages/work/Dinst'
import { Wakoopa } from '../pages/work/Wakoopa'
import { Fontem } from '../pages/work/Fontem'
import images from './images'

export const workProjects = [
  {
    pathname: '/work/fontem-ventures',
    label: '2019: Fontem Ventures',
    title: 'Fontem Ventures',
    image: images.books,
    content: Fontem,
  },
  {
    pathname: '/work/transavia',
    label: '2018 - 2019: Transavia',
    title: 'Transavia',
    image: images.transavia,
    content: Transavia,
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
