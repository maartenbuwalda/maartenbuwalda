import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Page from '../Page'
import Card from '../../containers/Card'
import { content } from '../../constants/pages'

const Pages = ({ position }) => {
  return (
    <Card position={position}>
      {content.map((page, i) => {
        return (
          <Route
            key={i}
            exact={page.pathname === '/'}
            path={page.pathname}
            render={() => <Page page={page} />}
          />
        )
      })}
    </Card>
  )
}

Pages.propTypes = {
  position: PropTypes.string,
}

export default Pages
