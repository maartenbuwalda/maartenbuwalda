import React from 'react'
import Card from '../../containers/Card'
import PropTypes from 'prop-types'

const Page = ({ position, children }) => {
  return (
    <Card position={position}>
      {children}
    </Card>
  )
}

Page.propTypes = {
  position: PropTypes.string,
  children: PropTypes.node,
}

export default Page
