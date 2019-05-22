import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import Page from '../Page'
import Card from '../Card'
import { pages } from '../../constants/pages'
import { subPages } from '../../constants/subPages'

const Pages = ({ position }) => {
  const routes = [...pages, ...subPages]
  return (
    <Card position={position}>
      <Switch>
        {routes.map((route, i) => {
          return <Route key={i} exact path={route.pathname} render={() => <Page page={route} />}/>
        })}
      </Switch>
    </Card>
  )
}

Pages.propTypes = {
  position: PropTypes.string,
}

export default Pages
