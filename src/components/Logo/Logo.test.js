import React from 'react'
import Logo from './index'
import { mount } from 'enzyme'
import { componentRenders } from '../../testUtils/rendering'
import { color } from '../../testUtils/mocks/color'

describe('Logo component', () => {
  const component = <Logo />
  componentRenders(component)

  describe('when animating', () => {
    const component = <Logo animated color={color} />
    const mounted = mount(component)
    expect(mounted)
  })
})
