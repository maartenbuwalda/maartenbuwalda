import React from 'react'
import styled from 'styled-components'

const LoadingIndicator = styled.div`
  width: 1rem;
  height: 1rem;
  background: black;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`

const Loading = () => (
  <Wrapper>
    loading
    <LoadingIndicator />
  </Wrapper>
)

export default Loading
