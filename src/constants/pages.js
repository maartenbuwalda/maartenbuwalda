import ireland from '../static/images/ireland.jpg'
// import ireland2 from '../static/images/ireland2.jpg'
import norway from '../static/images/norway.jpg'
import me from '../static/images/me1.jpg'
import transavia from '../static/images/transavia.png'

export const timeline = [
  {
    pathname: '/',
    label: 'About me',
    title: 'Maarten Buwalda',
    image: me,
    icon: 'face',
    description: [
      'hi'
    ]
  },
  {
    pathname: '/education',
    label: 'Education',
    title: 'Education',
    image: ireland,
    icon: 'book',
    description: [
      'hi'
    ]
  },
  {
    pathname: '/work',
    label: 'Work',
    title: 'Transavia',
    image: transavia,
    icon: 'code',
    description: [
      'hi'
    ]
  },
  {
    pathname: '/contact',
    label: 'Contact',
    title: 'Contact',
    image: norway,
    icon: 'chat',
    description: [
      'hi'
    ]
  },
]
