import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../constants/colors'

const Article = styled.article`
  width: 100%;
  max-width: 30rem;
  padding: 1rem;
  margin: 1rem;
  background-color: ${colors.white};
`

const Page = ({ children }) => {
  return (
    <Article>
      {children}
    </Article>
  )
}

Page.propTypes = {
  children: PropTypes.node,
}

export default Page
