import React from 'react'
import Background from './index'
import { componentMounts } from '../../testUtils/rendering'

describe('Background component', () => {
  const component = <Background>Children</Background>
  componentMounts(component)
})
