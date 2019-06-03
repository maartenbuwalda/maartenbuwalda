import React from 'react'
import Tags from './Tags'
import { componentMounts } from '../../testUtils/rendering'

describe('Tags component', () => {
  const component = <Tags list={['test']} />
  componentMounts(component)
})
