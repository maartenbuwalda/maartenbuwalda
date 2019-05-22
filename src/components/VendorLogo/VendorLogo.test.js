import React from 'react'
import VendorLogo from './index'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../../constants/images', () => ({}))

const vendors = [ 'react', 'react native', 'jest', 'ember', 'redux', 'middleman', 'storybook' ]

describe('VendorLogo component', () => {
  describe('when doing a basic render', () => {
    const component = <VendorLogo />
    componentRenders(component)
  })

  vendors.forEach(vendor => {
    describe(`when passing ${vendor} as vendor`, () => {
      const component = <VendorLogo vendor={vendor} />
      componentRenders(component, vendor)
    })
  })
})
