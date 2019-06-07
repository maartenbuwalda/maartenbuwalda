import { Transavia } from '../pages/work/Transavia'
import { Dinst } from '../pages/work/Dinst'
import { Wakoopa } from '../pages/work/Wakoopa'
import { Fontem } from '../pages/work/Fontem'
import images from './images'

export const workProjects = [
  {
    pathname: '/work/fontem-ventures',
    type: 'work',
    label: '2019 - now: Fontem Ventures',
    title: 'Fontem Ventures',
    image: images.blu,
    content: Fontem,
  },
  {
    pathname: '/work/transavia',
    type: 'work',
    label: '2018 - 2019: Transavia',
    title: 'Transavia',
    image: images.transavia,
    content: Transavia,
  },
  {
    pathname: '/work/wakoopa',
    type: 'work',
    label: '2015 - 2017: Wakoopa',
    title: 'Wakoopa',
    image: images.wakoopa,
    content: Wakoopa,
  },
  {
    pathname: '/work/dinst',
    type: 'work',
    label: '2014 - 2015: Dinst',
    title: 'Dinst',
    image: images.dinst,
    content: Dinst,
  },
]
