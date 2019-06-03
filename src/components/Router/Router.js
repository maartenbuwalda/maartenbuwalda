import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { AnimatedSwitch } from 'react-router-transition';
import PropTypes from 'prop-types'
import Page from '../Page'
import Card from '../Card'
import { routes } from '../../constants/routes'
import { workProjects } from '../../constants/workProjects'
import { sideProjects } from '../../constants/sideProjects'

const Router = ({ position }) => {
  const navigation = [...routes, ...sideProjects, ...workProjects]
  return (
    <Card position={position}>
      <Switch>
        {navigation.map((route, i) => {
          return <Route key={i} exact path={route.pathname} render={() => <Page page={route} />}/>
        })}
      </Switch>
    </Card>
  )
}

Router.propTypes = {
  position: PropTypes.string,
}

export default Router
