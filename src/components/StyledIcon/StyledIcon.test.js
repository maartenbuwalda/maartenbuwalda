import React from 'react'
import StyledIcon from './StyledIcon'
import { componentMounts } from '../../testUtils/rendering'

describe('StyledIcon component', () => {
  const component = <StyledIcon>test</StyledIcon>
  componentMounts(component)
})
