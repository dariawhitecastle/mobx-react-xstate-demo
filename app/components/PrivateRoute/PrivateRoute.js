/**
 * PrivateRoute
 */

import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'

import { UserStoreContext } from '../../stores/UserStore'

const PrivateRoute = observer(({ component: Component, ...rest }) => {
  const userStore = useContext(UserStoreContext)
  const { token } = userStore

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
})

export default PrivateRoute
