import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../constants/colors'
import shadows from '../../constants/shadows'

const Article = styled.article`
  grid-area: ${({ position }) => position};
  width: 100%;
  color: ${colors.fadedBlack};
  overflow: hidden;
  background-color: ${({ transparent }) => transparent ? 'transparent' : colors.white};
  box-shadow: ${({ transparent }) => transparent ? 'none' : shadows.mild};
`

const Main = styled.main`
  transition: opacity .3s;

  .colored {
    transition: background-color .3s, color .3s;
    color: ${({ color }) => color.hex.colorMutedLight};
    background-color: ${({ color }) => color.hex.colorMutedRegular};
  }

  h1, h2, h3 {
    transition: color 1s;
    color: ${({ color }) => color.hex.colorMutedRegular};
  }

  a {
    transition: color 1s;
    color: ${colors.darkGray};
  }

  a:hover, a.active {
    transition: color .3s;
    color: ${({ color }) => color.hex.colorMutedRegular}; 
  };
`

class Card extends React.Component {
  render () {
    const { children, position, color, ...rest } = this.props
    return (
      <Article position={position} color={color} {...rest}>
        <Main color={color}>
          {children}
        </Main>
      </Article>
    )
  }
}

Card.defaultProps = {
  content: ''
}

Card.propTypes = {
  children: PropTypes.node,
  color: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.string,
}

export default Card
