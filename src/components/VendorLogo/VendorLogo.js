import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import images from '../../constants/images'

const getLogo = vendor => {
  switch (vendor) {
    case 'jest': return images.jest
    case 'react native':
    case 'react': return images.react
    case 'redux': return images.redux
    case 'ember': return images.ember
    case 'middleman': return images.middleman
    case 'storybook': return images.storybook
    default: return null
  }
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

const VendorLogo = ({ vendor }) => {
  const src = getLogo(vendor)
  return (
    <Figure>
      {src && <StyledLogo src={src} />}
    </Figure>
  )
}

VendorLogo.propTypes = {
  vendor: PropTypes.string,
}

export default VendorLogo
