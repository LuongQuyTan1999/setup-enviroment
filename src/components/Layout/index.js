import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { loading } from '../../utils/helpers'
import routes from '../../routes'

function PrivateRoute({ auth, location, ...rest }) {
  const { isAuthenticated, token } = auth
  const redirectTo = {
    pathname: '/login',
    state: { from: location },
  }

  if (isAuthenticated && token.tokenType && token.accessToken) {
    return <Route {...rest} />
  }

  return <Redirect to={redirectTo} />
}

function Layout(props) {
  const { auth, location } = props
  return (
    <Suspense fallback={loading()}>
      <Switch>
        {routes.map(route => {
          if (route.component) {
            return route.auth ? (
              <PrivateRoute
                {...route}
                key={route.id}
                location={location}
                auth={auth}
              />
            ) : (
              <Route {...route} key={route.id} />
            )
          }
          return null
        })}
      </Switch>
    </Suspense>
  )
}

export default Layout
