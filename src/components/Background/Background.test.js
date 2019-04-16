import React from 'react'
import Background from './index'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../../static/images/ireland.jpg', () => 'ireland')
jest.mock('../../static/images/norway.jpg', () => 'norway')

describe('Background component', () => {
  const component = <Background />
  componentRenders(component)
})
