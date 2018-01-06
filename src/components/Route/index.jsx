import React from 'react'
import Loading from '../Loading'
import {
  Redirect,
  Route
} from 'react-router-dom'

export default ({
  component: Component,
  isPrivate,
  isLoggedIn,
  isLoading,
  redirect,
  path,
  ...rest
}) =>
  <Route
    {...rest}
    path={process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/${path}` : path}
    render={(props) => {
      if (isLoading) {
        return <Loading />
      }

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
