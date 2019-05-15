import React from 'react'
import { mount } from 'enzyme'
import Card from './index'
import { componentRenders } from '../../testUtils/rendering'
import { color } from '../../testUtils/mocks/color'

describe('Card component', () => {
  const component = <Card />
  componentRenders(component)

  describe('when rendering with props', () => {
    const component = <Card color={color} position="test" />
    const mounted = mount(component)
    it('renders correctly', () => {
      expect(mounted)
    })
  })

  describe('when rendering with a transparent background', () => {
    const component = <Card transparent color={color} position="test" />
    const mounted = mount(component)
    it('renders correctly', () => {
      expect(mounted)
    })
  })
})
