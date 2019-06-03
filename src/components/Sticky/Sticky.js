import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import colors from '../../constants/colors'

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`

const Sticky = ({ children }) => {
  return (
    <StickyWrapper>
      {children}
    </StickyWrapper>
  )
}

Sticky.propTypes = {
  children: PropTypes.node,
}

export default Sticky
