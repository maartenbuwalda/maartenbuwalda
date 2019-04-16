import React from 'react'
import Heading from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('Heading component', () => {
  const component = <Heading />
  componentRenders(component)
})
