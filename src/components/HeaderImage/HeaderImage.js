import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../constants/colors'
import { sizes } from '../../constants/mediaQueries'
import { ColorContext } from '../../context/color'
import Logo from '../../components/Logo'

class HeaderImage extends React.Component {
  componentDidMount () {
    const { updateTheme, image } = this.props
    updateTheme(image)
  }

  render () {
    const { image, title } = this.props
    return (
      <ImageWrapper>
        <Image onLoad={() => console.log('hallo ja')} image={image} />
        <ColorContext.Consumer>
          {({ theme }) => (
            <>
              <LogoWrapper theme={theme}>
                <Logo white size="3rem"/>
              </LogoWrapper>
              <Title theme={theme}>
                <h1>{title}</h1>
              </Title>
            </>
          )}
        </ColorContext.Consumer>
      </ImageWrapper>
    )
  }
}

const LogoWrapper = styled.div`
  display: none;
  align-items: center;
  position: absolute;
  transition: background-color 1s;
  top: 1rem;
  left: 1rem;
  background-color: ${({ theme }) => theme.hex.colorMutedRegular};

  h1 {
    color: ${colors.white}
  }
`

const Title = styled.div`
  display: none;
  transition: all .3s;
  z-index: 2;
  padding: .5rem 1rem;
  background-color: ${({ theme }) => theme.hex.colorMutedRegular};
  /* margin-bottom: 1rem; */

  h1 {
    transition: color .3s;
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
    color: ${colors.white};

    @media (min-width: ${sizes.m}) {
      font-size: 3rem;
    }
  }
`

const ImageWrapper = styled.div`
  min-height: 15rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: ${sizes.m}) {
    min-height: 30rem;
    /* justify-content: flex-end; */
  }
`

const Image = styled.div`
  position: absolute;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center top;
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
  updateTheme: PropTypes.func,
}

export default HeaderImage
