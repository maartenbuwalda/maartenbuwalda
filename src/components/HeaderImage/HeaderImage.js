import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Img } from 'react-image'
import Loading from '../Loading'
import { sizes } from '../../constants/mediaQueries'
import colors from '../../constants/colors'
import shadows from '../../constants/shadows'
import { ColorContext } from '../../context/color'

class HeaderImage extends React.Component {
  componentDidMount () {
    const { updateTheme, image } = this.props
    updateTheme(image)
  }

  render () {
    const { image, type } = this.props
    return (
      <ColorContext.Consumer>
        {({ theme }) => (
          <>
            {image && (
              <ImageWrapper type={type} theme={theme}>
                <Img
                  src={image}
                  loader={<Placeholder><Loading/></Placeholder>}/>
              </ImageWrapper>
            )}
          </>
        )}
      </ColorContext.Consumer>
    )
  }
}

const ImageWrapper = styled.figure`
  background-color: rgba(${({ theme }) => theme.rgb.colorMutedRegular}, 0.2);
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
    box-shadow: ${shadows.medium};
    animation: fade .5s ease-out;
    display: block;
    max-height: ${({ type }) => type === 'work' ? 'calc(100% - 4rem)' : '100%'};
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
  type: PropTypes.string,
  updateTheme: PropTypes.func,
}

export default HeaderImage
