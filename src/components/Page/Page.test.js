import React from 'react'
import Page from './index'
import { componentMounts } from '../../testUtils/rendering'

describe('Page component', () => {
  const component = <Page page={{
    image: 'test',
    content: 'test',
  }} />
  componentMounts(component)
})
