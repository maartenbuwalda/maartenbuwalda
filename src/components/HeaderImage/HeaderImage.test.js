import React from 'react'
import HeaderImage from './HeaderImage'
import { componentMounts } from '../../testUtils/rendering'
import { color } from '../../testUtils/mocks/color'

describe('HeaderImage component', () => {
  const testTitle = 'testTitle'
  const component = <HeaderImage title={testTitle} theme={color} updateTheme={jest.fn()} />
  componentMounts(component)
})
