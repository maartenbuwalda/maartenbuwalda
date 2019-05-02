import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { sizes } from '../../constants/mediaQueries'

const StyledGrid = styled.section`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    'm1'
    's1'
    'l1';

  @media (min-width: ${sizes.m}) {
    padding: 1rem;
    grid-template-columns: 25rem 1fr;
    grid-template-areas:
      's1 l1 l1'
      'm1 l1 l1'
      'm1 l1 l1'
      '. l1 l1';
    
    > * {
      margin-bottom: 0;
    }
  }
`

const Grid = ({ children }) => (
  <StyledGrid>
    {children}
  </StyledGrid>
)

Grid.propTypes = {
  children: PropTypes.node,
}

export default Grid
