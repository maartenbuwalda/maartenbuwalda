import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ href, children }) => <a href={href} rel="noopener noreferrer" target="_blank">{children}</a>

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
}

export default Link
