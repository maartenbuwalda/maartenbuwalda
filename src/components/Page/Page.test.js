import React from 'react'
import Page from './index'
import { componentRenders } from '../../testUtils/rendering'

global.scrollTo = jest.fn()

describe('Page component', () => {
  const component = <Page page={{
    image: 'test',
    content: 'test',
  }} />
  componentRenders(component)
})
