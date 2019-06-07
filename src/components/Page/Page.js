import React, { useEffect } from 'react'
import styled from 'styled-components'
import HeaderImage from '../../components/HeaderImage'
import PropTypes from 'prop-types'
import { ColorContext } from '../../context/color'
import colors from '../../constants/colors'
import { sizes } from '../../constants/mediaQueries'

const Page = ({ page }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  })

  return (
    <ColorContext.Consumer>
      {({ updateTheme, theme }) => (
        <>
          {page.image && (
            <HeaderImage
              updateTheme={updateTheme}
              type={page.type}
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

  > section:nth-child(even), .colored, section:only-child {
    background-color: rgba(${({ theme }) => theme.rgb.colorMutedLight}, 0.2);
  }

  h1, h2, h3, h4 {
    margin: 0;
  }

  h1 {
    font-size: 2rem;

    @media(min-width: ${sizes.m}) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.5rem;

    @media(min-width: ${sizes.m}) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.2rem;

    @media(min-width: ${sizes.m}) {
      font-size: 2rem;
    }
  }

  h4 {
    font-size: 1.2rem;
  }

  ul {
    list-style: none;

    li {
      padding: 2rem;
      margin-bottom: 2rem;
      border-radius: .5rem;
      background-color: ${colors.white};

      p {
        margin: 0;
      }
    }
  }

  p {
    line-height: 1.7;
    color: ${colors.fadedBlack}
  }
`

export default Page
