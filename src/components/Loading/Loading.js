import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

const LoadingIndicator = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background: ${colors.darkGray};
  animation: indicating 1s infinite;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = () => (
  <Wrapper>
    <LoadingIndicator />
  </Wrapper>
)

export default Loading
