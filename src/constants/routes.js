import AboutMe from '../pages/AboutMe'
import Work from '../pages/Work'
import SideProjects from '../pages/SideProjects'
import Contact from '../pages/Contact'
import Education from '../pages/Education'
import images from './images'
import { workProjects } from './workProjects'
import { sideProjects } from './sideProjects'

export const routes = [
  {
    pathname: '/',
    type: 'info',
    label: 'About me',
    title: 'Maarten Buwalda',
    image: images.me,
    icon: 'child_care',
    content: AboutMe,
    subNavigation: [],
  },
  {
    pathname: '/education',
    type: 'work',
    label: 'Education',
    title: 'Education',
    image: images.education,
    icon: 'local_library',
    content: Education,
    subNavigation: [],
  },
  {
    pathname: '/work',
    type: 'info',
    label: 'Work',
    title: 'Work',
    icon: 'code',
    image: workProjects[0].image,
    content: Work,
    subNavigation: workProjects,
  },
  {
    pathname: '/side-projects',
    type: 'info',
    label: 'Side projects',
    title: 'Side projects',
    image: sideProjects[0].image,
    icon: 'assignment',
    content: SideProjects,
    subNavigation: sideProjects,
  },
  {
    pathname: '/contact',
    type: 'info',
    label: 'Contact',
    title: 'Contact',
    image: images.contact,
    icon: 'chat',
    content: Contact,
    subNavigation: [],
  },
]
