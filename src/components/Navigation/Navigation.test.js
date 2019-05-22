import React from 'react'
import Navigation from './index'
import { HashRouter } from 'react-router-dom'
import { componentMounts } from '../../testUtils/rendering'

jest.mock('../../constants/images', () => ({}))

describe('Navigation component', () => {
  const component = (
    <HashRouter>
      <Navigation />
    </HashRouter>
  )
  componentMounts(component)
})
