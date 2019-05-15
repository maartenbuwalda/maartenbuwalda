import React from 'react'
import styled from 'styled-components'
import HeaderImage from '../../components/HeaderImage'
import PropTypes from 'prop-types'
import { ColorContext } from '../../context/color'

const PageContent = styled.div`
  padding: 2rem 3rem;
  /* transform: translateY(-2rem); */
  background-color: white;
  /* max-width: calc(100% - 8rem); */
  margin: auto;
`

const Page = ({ page }) => {
  return (
    <>
      {page.image && (
        <ColorContext.Consumer>
          {({ updateTheme }) => (
            <HeaderImage
              updateTheme={updateTheme}
              image={page.image}
              title={page.title}
            />
          )}
        </ColorContext.Consumer>
      )}
      {page.content && (
        <PageContent>
          {page.content}
        </PageContent>
      )}
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
