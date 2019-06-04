import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { sizes } from '../../constants/mediaQueries'

const Grid = ({ children }) => (
  <StyledGrid>
    {children}
  </StyledGrid>
)

Grid.propTypes = {
  children: PropTypes.node,
}

const StyledGrid = styled.section`
  display: grid;
  max-width: ${sizes.xl};
  margin: auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    'm1'
    's1'
    'l1';

  @media (min-width: ${sizes.m}) {
    grid-template-columns: 25rem 1fr;
    grid-template-areas:
      's1 l1 l1'
      'm1 l1 l1'
      'm1 l1 l1'
      '. l1 l1';
  }
`

export default Grid
