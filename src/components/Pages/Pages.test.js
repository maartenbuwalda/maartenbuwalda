import React from 'react'
import Pages from './Pages'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../../constants/subPages', () => ({
  subPages: [
    {
      pathname: '/',
      label: 'About me',
      title: 'Maarten Buwalda',
      image: 'images.me',
      icon: 'face',
      content: 'AboutMe',
    },
    {
      pathname: '/education',
      label: 'Education',
      title: 'Education',
      image: 'images.books',
      icon: 'book',
      content: 'Education',
    }
  ]
}))

jest.mock('../../constants/routes', () => ({
  routes: [
    {
      pathname: '/',
      label: 'About me',
      title: 'Maarten Buwalda',
      image: 'images.me',
      icon: 'face',
      content: 'AboutMe',
    },
    {
      pathname: '/education',
      label: 'Education',
      title: 'Education',
      image: 'images.books',
      icon: 'book',
      content: 'Education',
    }
  ]
}))

describe('Pages component', () => {
  const component = <Pages />
  componentRenders(component)
})
