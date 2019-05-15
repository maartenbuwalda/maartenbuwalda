import React from 'react'
import Page from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('Page component', () => {
  const component = <Page page={{}} />
  componentRenders(component)
})
