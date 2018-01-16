// @flow

import React from 'react'
import Loading from '../Loading'
import {
  Redirect,
  Route
} from 'react-router-dom'

type Props = {
  component: Object,
  isPrivate: ?Boolean,
  isLoggedIn: Boolean,
  isLoading: Boolean,
  redirect: ?String,
  rest: mixed
}

export default ({
  component: Component,
  isPrivate,
  isLoggedIn,
  isLoading,
  redirect,
  ...rest
}: Props) =>
  <Route
    {...rest}
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
