import React from 'react'
import styled from 'styled-components'
import HeaderImage from '../../containers/HeaderImage'
import PropTypes from 'prop-types'

const Description = styled.div`
  padding: 1rem;
`

const Page = ({ page }) => {
  return (
    <>
      <HeaderImage
        image={page.image}
        title={page.title}
      />
      <Description>
        {page.content}
      </Description>
    </>
  )
}

Page.propTypes = {
  page: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.node,
  })
}

export default Page
