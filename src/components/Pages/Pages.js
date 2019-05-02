import React from 'react'
import Page from '../Page'
import { content } from '../../constants/pages'
import HeaderImage from '../../containers/HeaderImage'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Description = styled.section`
  padding: 0 1rem;
`

const Pages = props => {
  const { position, location } = props
  const page = content.find(page => page.pathname === location.pathname)
  return (
    <Page position={position}>
      <HeaderImage
        image={page.image}
        title={page.title}
      />
      <Description>
      </Description>
    </Page>
  )
}

Pages.propTypes = {
  position: PropTypes.string,
  location: PropTypes.object,
}

export default Pages
