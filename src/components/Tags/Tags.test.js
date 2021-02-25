import React from 'react'
import Tags from './Tags'
import { componentRenders } from '../../testUtils/rendering'

describe('Tags component', () => {
  const component = <Tags list={['test']} />
  componentRenders(component)
})
