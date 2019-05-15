import AboutMe from '../components/Pages/AboutMe'
import Work from '../components/Pages/Work'
import images from './images'
import { subPages } from './subPages'

export const pages = [
  {
    pathname: '/',
    label: 'About me',
    title: 'Maarten Buwalda',
    image: images.ireland,
    icon: 'face',
    content: AboutMe,
    subNavigation: [],
  },
  {
    pathname: '/education',
    label: 'Education',
    title: 'Education',
    image: images.books,
    icon: 'book',
    content: AboutMe,
    subNavigation: [],
  },
  {
    pathname: '/work',
    label: 'Work',
    title: 'Work',
    icon: 'code',
    image: images.books,
    content: Work,
    subNavigation: subPages,
  },
  {
    pathname: '/contact',
    label: 'Contact',
    title: 'Contact',
    image: images.norway,
    icon: 'chat',
    content: AboutMe,
    subNavigation: [],
  },
]
