import React from 'react'
import Navigation from './index'
import { HashRouter } from 'react-router-dom'
import { componentRenders } from '../../testUtils/rendering'

jest.mock('../../constants/images', () => ({}))

describe('Navigation component', () => {
  const component = (
    <HashRouter>
      <Navigation />
    </HashRouter>
  )
  componentRenders(component)

  // describe('when clicking on a link', () => {
  //   const toggleMenu = jest.fn()
  //   const mounted = mount(component)
  //   const button = mounted.find('[data-test-id="open-menu-button"]')
  //   console.log(button)
  //   const instance = mounted.instance()
  //   instance.toggleMenu = toggleMenu
  //   button.simulate('click')
  //   expect(toggleMenu).toHaveBeenCalledWith(true)
  // })
})
