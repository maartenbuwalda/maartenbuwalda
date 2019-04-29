import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../constants/colors'

class HeaderImage extends React.Component {
  componentDidMount () {
    this.setTheme()
  }

  componentDidUpdate (prevProps) {
    const currentImage = this.props.image
    const previousImage = prevProps.image
    if (currentImage !== previousImage) {
      this.setTheme()
    }
  }

  setTheme () {
    const { getDominantColor, image } = this.props
    getDominantColor(image)
  }

  render () {
    const { image, title, color } = this.props
    return (
      <ImageWrapper>
        <Image image={image} />
        <Title color={color}>
          <h1>{title}</h1>
        </Title>
      </ImageWrapper>
    )
  }
}

const Title = styled.div`
  transition: all .3s;
  z-index: 2;
  padding: .5rem 1rem;
  background-color: ${colors.white};

  h1 {
    transition: color .3s;
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
    color: ${({ color }) => color.hex.colorMutedRegular};
  }
`

const ImageWrapper = styled.div`
  min-height: 30rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Image = styled.div`
  position: absolute;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  background-size: cover;
`

HeaderImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.object,
  children: PropTypes.node,
  getDominantColor: PropTypes.func,
}

export default HeaderImage
