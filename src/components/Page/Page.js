import React from 'react'
import styled from 'styled-components'
import HeaderImage from '../../components/HeaderImage'
import PropTypes from 'prop-types'
import { ColorContext } from '../../context/color'
import colors from '../../constants/colors'
import { sizes } from '../../constants/mediaQueries'

const PageContent = styled.article`

  section {
    padding: 4rem 2rem;
    transition: background-color 1s;
  }

  @media(min-width: ${sizes.m}) {
    section {
      padding: 4rem;
    }
  }

  > section:nth-child(even), .colored {
    background-color: rgba(${({ theme }) => theme.rgb.colorMutedLight}, 0.2);
  }

  h2 {
    font-size: 2rem;
    margin: 0;
  }
  
  h3 {
    font-size: 1.5rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 1rem;

    li {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
  }

  p {
    line-height: 1.7;
    font-size: 1.2rem;
    color: ${colors.fadedBlack}
  }
`

const Page = ({ page }) => {
  return (
    <ColorContext.Consumer>
      {({ updateTheme, theme }) => (
        <>
          {page.image && (
            <HeaderImage
              updateTheme={updateTheme}
              image={page.image}
              title={page.title}
            />
          )}
          {page.content && (
            <PageContent theme={theme}>
              {page.content}
            </PageContent>
          )}
        </>
      )}
    </ColorContext.Consumer>
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
