import React from 'react'
import { HashRouter } from 'react-router-dom'
import Router from './Router'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../../constants/sideProjects', () => ({
  sideProjects: []
}))

jest.mock('../../constants/workProjects', () => ({
  workProjects: []
}))

jest.mock('../../constants/routes', () => ({
  routes: []
}))

describe('Router component', () => {
  const component = <HashRouter><Router /></HashRouter>
  componentRenders(component)
})
