import React from 'react'
import Logo from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('Logo component', () => {
  const component = <Logo />
  componentRenders(component)
})
