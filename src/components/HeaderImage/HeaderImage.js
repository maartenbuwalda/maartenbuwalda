import React from 'react'
import styled from 'styled-components'
import Img from 'react-image'
import PropTypes from 'prop-types'
import Loading from '../Loading'
import { sizes } from '../../constants/mediaQueries'
import colors from '../../constants/colors'

class HeaderImage extends React.Component {
  componentDidMount () {
    const { updateTheme, image } = this.props
    updateTheme(image)
  }

  render () {
    const { image } = this.props

    return (
      <ImageWrapper>
        <Img
          src={image}
          loader={<Placeholder><Loading/></Placeholder>}/>
      </ImageWrapper>
    )
  }
}

const ImageWrapper = styled.figure`
  background: ${colors.gray};
  margin: 0;
  overflow: hidden;
  height: 30rem;
  max-height: 20rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    animation: appear .5s ease-out;
    display: block;
    max-height: 100%;
  }

  @media (min-width: ${sizes.m}) {
    max-height: 30rem;
  }
`

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30rem;
  width: 100%;
  background: ${colors.gray};
`

HeaderImage.propTypes = {
  image: PropTypes.string,
  updateTheme: PropTypes.func,
}

export default HeaderImage
