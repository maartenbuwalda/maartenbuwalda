import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../constants/colors'

const Article = styled.article`
  perspective: 200px;
  grid-area: ${props => props.position};
  width: 100%;
  max-width: 60rem;
  color: ${colors.fadedBlack};
  background-color: ${colors.white};
  box-shadow: 0 19px 38px rgba(0,0,0,0.2), 0 15px 12px rgba(0,0,0,0.2);
`

const Main = styled.main`
  transition: opacity .3s;
  padding: 1rem;
  margin: 1rem;
  width: 60%;
`

class Card extends React.Component {
  render () {
    const { children, position, color } = this.props
    return (
      <Article position={position} color={color}>
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
