import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import images from '../../constants/images'

const VendorLogo = ({ vendor }) => {
  const src = images[vendor] || null
  return (
    <Figure>
      {src && <StyledLogo src={src} />}
    </Figure>
  )
}

VendorLogo.propTypes = {
  vendor: PropTypes.string,
}

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem 0 0;
  height: 3rem;
  width: 3rem;

  &:empty {
    display: none;
  }
`

const StyledLogo = styled.img`
  max-width: 3rem;
  max-height: 3rem;
  display: block;
`

export default VendorLogo
