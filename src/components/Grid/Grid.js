import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledGrid = styled.section`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  grid-template-columns: 25rem 1fr;
  grid-template-areas:
    's1 l1 l1'
    'm1 l1 l1'
    'm1 l1 l1'
    '. l1 l1';
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
