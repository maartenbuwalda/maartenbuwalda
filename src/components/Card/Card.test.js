import React from 'react'
import Card from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('Card component', () => {
  const component = <Card />
  componentRenders(component)
})
