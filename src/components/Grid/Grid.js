import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledGrid = styled.section`
  display: grid;
  width: 80vw;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  grid-template-areas:
    'l1 l1 l1 l1 . s1 s1 s1 . m1 m1 m1 m1'
    'l1 l1 l1 l1 . s1 s1 s1 . m1 m1 m1 m1'
    'l1 l1 l1 l1 . . . . . m1 m1 m1 m1'
    'l1 l1 l1 l1 . . . . . . . . .'
    'l1 l1 l1 l1 . . s2 s2 . . m2 m2 m2'
    'l1 l1 l1 l1 . . s2 s2 . . m2 m2 m2'
    'l1 l1 l1 l1 . . s2 s2 . . m2 m2 m2'
    'l1 l1 l1 l1 . . . . . . m2 m2 m2'
    '. . . . . . . . . . m2 m2 m2';
  margin-bottom: 3rem;
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
