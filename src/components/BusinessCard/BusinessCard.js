import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../components/Card'
import Logo from '../../components/Logo'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { Link } from 'react-router-dom'

const CardLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 16rem;
  padding: 1rem;
  margin: 1rem;

  a {
    text-decoration: none;
  }
`

const TitleWrapper = styled.div`
  h1, p {
    margin: 0;
    text-align: center;
    color: ${colors.fadedWhite};
  }
  h1 {
    font-size: 2rem;
    margin-bottom: .25rem;
  }
  p {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: .75rem;
  }
`

const Contact = styled.div`
  border-top: 1px solid ${colors.gray};
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 1rem 0 0;

  a {
    margin: 0 .5rem;
  }
`

const StyledLogo = styled(Logo)`
  margin: auto;
  margin-bottom: 1rem;
  padding: 0;
`

const BusinessCard = ({ position }) => {
  return (
    <Card background="colored" position={position}>
      <CardLayout>
        <Link to="/">
          <StyledLogo white animated/>
          <TitleWrapper>
            <h1>Maarten Buwalda</h1>
            <p>front-end developer</p>
          </TitleWrapper>
        </Link>
        <Contact>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maartenbuwalda/">linkedin</a>-
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/maartenbuwalda">github</a>-
          <a target="_blank" rel="noopener noreferrer" href="mailto:maarten@maartenbuwalda.com">email</a>
        </Contact>
      </CardLayout>
    </Card>
  )
}

BusinessCard.propTypes = {
  position: PropTypes.string,
}

export default BusinessCard
