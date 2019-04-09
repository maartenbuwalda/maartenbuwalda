import React from 'react'
import Grid from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('Grid component', () => {
  const component = <Grid />
  componentRenders(component)
})
