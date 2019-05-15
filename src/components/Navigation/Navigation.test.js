import React from 'react'
import Navigation from './index'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../../constants/images', () => ({}))

describe('Navigation component', () => {
  const component = <Navigation />
  componentRenders(component)
})
