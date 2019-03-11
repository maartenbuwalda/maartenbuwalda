import React from 'react'
import PropTypes from 'prop-types'
import Card from '../containers/Card'
import Logo from '../containers/Logo'

const Home = ({ position }) => {
  return (
    <Card position={position}>
      <Logo />
    </Card>
  )
}

Home.propTypes = {
  position: PropTypes.string,
}

export default Home
