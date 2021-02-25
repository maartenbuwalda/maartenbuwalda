import React from 'react'
import { HashRouter } from 'react-router-dom'
import BusinessCard from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('BusinessCard component', () => {
  const component = <HashRouter><BusinessCard /></HashRouter>
  componentRenders(component)
})
