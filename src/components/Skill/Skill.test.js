import React from 'react'
import Skill from './index'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../../constants/images', () => ({}))

describe('Skill component', () => {
  const component = <Skill />
  componentRenders(component)
})
