import React from 'react'
import Sticky from './Sticky'
import { componentRenders } from '../../testUtils/rendering'

describe('Sticky component', () => {
  const component = <Sticky>test</Sticky>
  componentRenders(component)
})
