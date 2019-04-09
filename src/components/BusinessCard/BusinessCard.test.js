import React from 'react'
import BusinessCard from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('BusinessCard component', () => {
  const component = <BusinessCard />
  componentRenders(component)
})
