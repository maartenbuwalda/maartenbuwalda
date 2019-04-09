import React from 'react'
import Button from './index'
import { componentRenders } from '../../testUtils/rendering'

describe('Button component', () => {
  const component = <Button />
  componentRenders(component)
})
