import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../constants/colors'
import { ColorContext } from '../../context/color'

class Card extends React.Component {
  render () {
    const { children, position, ...rest } = this.props
    return (
      <ColorContext.Consumer>
        {({ theme }) => (
          <StyledCard data-testid="card" position={position} theme={theme} {...rest}>
            <Section theme={theme} {...rest}>
              {children}
            </Section>
          </StyledCard>
        )}
      </ColorContext.Consumer>
    )
  }
}

Card.defaultProps = {
  content: ''
}

Card.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.string,
}

const StyledCard = styled.div`
  grid-area: ${({ position }) => position};
  width: 100%;
  overflow: hidden;
  transition: all 1s;
  color: ${({ background }) => {
    switch (background) {
      case 'colored': return colors.fadedWhite
      default: return colors.fadedBlack
    }
  }};
  background-color: ${({ background, theme }) => {
    switch (background) {
      case 'transparent': return 'transparent'
      case 'colored': return theme.hex.colorRegular
      default: return colors.white
    }
  }};
`

const Section = styled.section`
  transition: all .3s;

  .colored {
    transition: background-color .3s, color .3s;
    color: ${({ theme }) => theme.hex.colorMutedLight};
    background-color: ${({ theme }) => theme.hex.colorMutedRegular};
  }

  h1, h2, h3 {
    transition: color 1s;
    color: ${({ theme }) => theme.hex.colorRegular};
  }

  a {
    transition: color 1s;
    color: ${({ background }) => {
    switch (background) {
      case 'colored': return colors.fadedWhite
      default: return colors.darkGray
    }
  }}
  }

  a:hover, a.active {
    transition: color .3s;
    color: ${({ background, theme }) => {
    switch (background) {
      case 'colored': return theme.hex.colorMutedRegular
      default: return theme.hex.colorRegular
    }
  }};
  };
`

export default Card
