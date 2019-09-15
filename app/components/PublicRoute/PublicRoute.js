/**
 * PublicRoute
 *
 * If a user is authenticated and attempts to access the component, they will be
 * redirected to their dashboard
 */

import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'

import { UserStoreContext } from '../../stores/UserStore'

const PublicRoute = observer(({ component: Component, ...rest }) => {
  const userStore = useContext(UserStoreContext)
  const { token } = userStore

  return (
    <Route
      {...rest}
      render={props =>
        token ? <Redirect to={{ pathname: '/dashboard' }} /> : <Component {...props} />
      }
    />
  )
})

export default PublicRoute
