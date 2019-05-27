import AboutMe from '../pages/AboutMe'
import Work from '../pages/Work'
import Contact from '../pages/Contact'
import images from './images'
import { subPages } from './subPages'

export const routes = [
  {
    pathname: '/',
    label: 'About me',
    title: 'Maarten Buwalda',
    image: images.me,
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
    content: Contact,
    subNavigation: [],
  },
]
