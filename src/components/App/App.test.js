import React from 'react'
import App from './index'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../BusinessCard', () => 'BusinessCard')
jest.mock('../Navigation', () => 'Navigation')
jest.mock('../Pages', () => 'Pages')

describe('App component', () => {
  const component = <App />
  componentRenders(component)
})
