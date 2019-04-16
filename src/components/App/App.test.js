import React from 'react'
import App from './index'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../Background', () => 'Background')
jest.mock('../Heading', () => 'Heading')
jest.mock('../BusinessCard', () => 'BusinessCard')

describe('App component', () => {
  const component = <App />
  componentRenders(component)
})
