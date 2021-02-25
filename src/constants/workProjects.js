import { Transavia } from '../pages/work/Transavia'
import { Dinst } from '../pages/work/Dinst'
import { Wakoopa } from '../pages/work/Wakoopa'
import { Fontem } from '../pages/work/Fontem'
import { FileWave } from '../pages/work/FileWave'
import images from './images'

export const workProjects = [
  {
    pathname: '/work/filewave',
    type: 'work',
    label: '2019 - now: FileWave',
    title: 'FileWave',
    image: images.filewave,
    content: FileWave,
  },
  {
    pathname: '/work/fontem-ventures',
    type: 'work',
    label: '2019: Fontem Ventures (project)',
    title: 'Fontem Ventures',
    image: images.blu,
    content: Fontem,
  },
  {
    pathname: '/work/transavia',
    type: 'work',
    label: '2018 - 2019: Transavia (project)',
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
