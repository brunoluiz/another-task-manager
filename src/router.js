import App from './containers/App.jsx'
import Auth from './containers/Auth.jsx'
import React from 'react'
import Route from './containers/Route.jsx'

import {
  BrowserRouter as Router
} from 'react-router-dom'

export default () =>
  <Router>
    <div>
      <Route isPublic path='/' component={Auth} redirect='/tasks' />
      <Route isPublic path='/login' component={Auth} redirect='/tasks' />
      <Route isPrivate path='/tasks' component={App} />
    </div>
  </Router>
