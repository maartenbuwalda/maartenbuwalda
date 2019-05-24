import React from 'react'
import VendorLogo from './index'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../../constants/images', () => ({}))

describe('VendorLogo component', () => {
  describe('when doing a basic render', () => {
    const component = <VendorLogo />
    componentRenders(component)
  })

  describe(`when passing a vendor`, () => {
    const component = <VendorLogo vendor="react" />
    componentRenders(component)
  })
})
