// import ireland from '../static/images/ireland.jpg'
// import ireland2 from '../static/images/ireland2.jpg'
import AboutMe from '../components/Pages/AboutMe'
import norway from '../static/images/norway.jpg'
import me from '../static/images/me1.jpg'
import transavia from '../static/images/transavia.png'
import books from '../static/images/books.jpg'

// Used to render the pages and the menu
export const content = [
  {
    pathname: '/',
    label: 'About me',
    title: 'Maarten Buwalda',
    image: me,
    icon: 'face',
    content: AboutMe,
  },
  {
    pathname: '/education',
    label: 'Education',
    title: 'Education',
    image: books,
    icon: 'book',
    content: AboutMe,
  },
  {
    pathname: '/work',
    label: 'Work',
    title: 'Transavia',
    image: transavia,
    icon: 'code',
    content: AboutMe,
  },
  {
    pathname: '/contact',
    label: 'Contact',
    title: 'Contact',
    image: norway,
    icon: 'chat',
    content: AboutMe,
  },
]
