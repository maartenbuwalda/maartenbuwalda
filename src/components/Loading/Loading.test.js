import React from 'react'
import Loading from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('Loading component', () => {
  const component = <Loading />
  componentRenders(component)
})
