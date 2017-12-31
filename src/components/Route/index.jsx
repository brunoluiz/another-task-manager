import React from 'react'
import {
  Redirect,
  Route
} from 'react-router-dom'

export default ({
  component: Component,
  isPrivate,
  isLoggedIn,
  redirect,
  ...rest
}) =>
  <Route
    {...rest}
    render={(props) => {
      if (isLoggedIn && redirect) {
        return <Redirect to={{
          pathname: redirect
        }} />
      }

      const isAuthorized = isPrivate
        ? isLoggedIn
        : true

      return (
        isAuthorized
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login'
        }} />
      )
    }}
  />
