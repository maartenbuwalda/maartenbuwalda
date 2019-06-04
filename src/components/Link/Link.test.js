import React from 'react'
import Link from './Link'
import { componentRenders } from '../../testUtils/rendering'

describe('Link component', () => {
  const component = <Link href="test">Test</Link>
  componentRenders(component)
})
