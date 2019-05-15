import React from 'react'
import Background from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('Background component', () => {
  const component = <Background color={{}}></Background>
  componentRenders(component)
})
