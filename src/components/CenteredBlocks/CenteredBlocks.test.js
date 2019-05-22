import React from 'react'
import CenteredBlocks from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('CenteredBlocks component', () => {
  const component = <CenteredBlocks>Children</CenteredBlocks>
  componentRenders(component)
})
