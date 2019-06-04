import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { sizes } from '../../constants/mediaQueries'

const CenteredBlocks = ({ children }) => {
  return <Centered>{children}</Centered>
}

CenteredBlocks.propTypes = {
  children: PropTypes.node,
}

const Centered = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin: 2rem 0;

  @media (min-width: ${sizes.m}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${sizes.l}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default CenteredBlocks
