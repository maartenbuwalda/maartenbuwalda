import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { sizes } from '../../constants/mediaQueries'

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

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;

  @media(min-width: ${sizes.m}) {
    display: flex;
    flex-direction: column;
    background: ${colors.white};
    min-height: 100vh;
  }

`

export default Sticky
