import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../constants/colors'

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: ${props => props.size || '8rem'};
  height: ${props => props.size || '8rem'};

  svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.white ? colors.white : props.color.hex.colorMutedRegular};
    transition: fill .3s;

    path {
      transition: all .3s;
      opacity: ${props => props.animated ? 0 : 1};

      &[data-appear=true] {
        opacity: 1;
      }
    }
  }
`

const Logo = ({ animated, size, ...rest }) => {
  useEffect(() => {
    if (!animated) return
    const paths = document.querySelectorAll('path')
    let count = 0
    window.logoAnimation = setInterval(() => {
      if (count >= paths.length) {
        return clearInterval(window.logoAnimation)
      }
      paths[count].setAttribute('data-appear', true)
      count++
    }, 50)
  })

  return (
    <LogoWrapper animated={animated} size={size} {...rest}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 509.000000 509.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,509.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M2065 4954 c-269 -73 -507 -138 -527 -144 l-38 -11 0 -554 0 -555
          150 0 150 0 0 435 c0 239 2 435 4 435 2 0 137 36 299 80 162 44 298 80 301 80
          3 0 6 -49 6 -110 l0 -110 150 0 150 0 0 110 c0 61 3 110 8 110 7 0 381 -104
          505 -141 l67 -20 0 -434 0 -435 150 0 150 0 0 554 c0 520 -1 555 -17 560 -150
          45 -1005 286 -1010 285 -5 -1 -228 -61 -498 -135z"/>
          <path d="M700 3585 l0 -805 150 0 150 0 0 655 0 655 195 0 195 0 0 150 0 150
          -345 0 -345 0 0 -805z"/>
          <path d="M1910 4240 l0 -150 635 0 635 0 0 150 0 150 -635 0 -635 0 0 -150z"/>
          <path d="M3700 4240 l0 -150 200 0 200 0 0 -655 0 -655 150 0 150 0 0 805 0
          805 -350 0 -350 0 0 -150z"/>
          <path d="M2410 3835 l0 -145 150 0 150 0 0 145 0 145 -150 0 -150 0 0 -145z"/>
          <path d="M287 3573 c-2 -5 -68 -242 -147 -527 l-142 -519 144 -516 145 -516
          151 -3 152 -3 0 150 0 150 -32 3 -32 3 -78 280 c-43 154 -78 283 -78 288 0 4
          230 7 510 7 l510 0 0 150 0 150 -514 2 -513 3 82 300 82 300 32 3 31 3 0 150
          0 149 -149 0 c-83 0 -152 -3 -154 -7z"/>
          <path d="M1110 3430 l0 -150 140 0 140 0 0 150 0 150 -140 0 -140 0 0 -150z"/>
          <path d="M1500 2740 l0 -840 150 0 150 0 0 690 0 690 305 0 305 0 0 -690 0
          -690 150 0 150 0 0 685 0 685 290 0 290 0 0 -685 0 -685 150 0 150 0 0 840 0
          840 -1045 0 -1045 0 0 -840z"/>
          <path d="M3700 3425 l0 -155 145 0 145 0 0 155 0 155 -145 0 -145 0 0 -155z"/>
          <path d="M4510 3430 l0 -150 24 0 c25 0 14 34 184 -592 4 -17 -25 -18 -507
          -18 l-511 0 0 -150 0 -150 510 0 c281 0 510 -3 510 -8 0 -4 -36 -133 -80 -287
          -44 -154 -80 -281 -80 -282 0 -2 -11 -3 -25 -3 l-25 0 0 -150 0 -150 145 0
          144 0 10 38 c6 20 71 250 145 510 l134 473 -139 517 c-77 284 -142 525 -145
          535 -5 15 -21 17 -150 17 l-144 0 0 -150z"/>
          <path d="M700 1470 l0 -790 345 0 345 0 0 155 0 155 -195 0 -195 0 0 635 0
          635 -150 0 -150 0 0 -790z"/>
          <path d="M4100 1625 l0 -635 -200 0 -200 0 0 -150 0 -150 350 0 350 0 0 785 0
          785 -150 0 -150 0 0 -635z"/>
          <path d="M1110 1640 l0 -150 268 0 c147 0 439 -3 650 -7 l382 -6 0 -189 0
          -188 150 0 150 0 0 188 0 189 362 6 c199 4 487 7 640 7 l278 0 0 150 0 150
          -1440 0 -1440 0 0 -150z"/>
          <path d="M1502 833 l3 -546 524 -144 524 -144 516 144 516 145 3 546 2 546
          -150 0 -150 0 0 -425 0 -424 -67 -20 c-108 -32 -501 -141 -507 -141 -4 0 -6
          47 -6 105 l0 105 -150 0 -149 0 -3 -108 -3 -109 -265 73 c-146 40 -282 78
          -302 84 l-38 11 0 424 0 425 -150 0 -150 0 2 -547z"/>
          <path d="M1910 835 l0 -155 635 0 635 0 0 155 0 155 -635 0 -635 0 0 -155z"/>
        </g>
      </svg>
    </LogoWrapper>
  )
}

Logo.propTypes = {
  animated: PropTypes.bool,
  size: PropTypes.string,
}

export default Logo
