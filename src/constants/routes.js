import AboutMe from '../pages/AboutMe'
import Work from '../pages/Work'
import Contact from '../pages/Contact'
import images from './images'
import { workProjects } from './workProjects'
import { sideProjects } from './sideProjects'

export const routes = [
  {
    pathname: '/',
    label: 'About me',
    title: 'Maarten Buwalda',
    image: images.me,
    icon: 'child_care',
    content: AboutMe,
    subNavigation: [],
  },
  {
    pathname: '/education',
    label: 'Education',
    title: 'Education',
    image: images.books,
    icon: 'local_library',
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
    subNavigation: workProjects,
  },
  {
    pathname: '/side-projects',
    label: 'Side projects',
    title: 'Side projects',
    image: images.books,
    icon: 'assignment',
    content: Work,
    subNavigation: sideProjects,
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
