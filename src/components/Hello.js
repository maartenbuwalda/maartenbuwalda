import React from 'react'
import PropTypes from 'prop-types'
import Card from '../containers/Card'

const Hello = ({ position }) => {
  return (
    <Card position={position}>
      <p></p>
    </Card>
  )
}

Hello.propTypes = {
  position: PropTypes.string,
}

export default Hello
