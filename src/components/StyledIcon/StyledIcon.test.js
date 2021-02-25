import React from 'react'
import StyledIcon from './StyledIcon'
import { componentRenders } from '../../testUtils/rendering'

describe('StyledIcon component', () => {
  const component = <StyledIcon>test</StyledIcon>
  componentRenders(component)
})
