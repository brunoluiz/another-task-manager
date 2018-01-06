import App from './containers/App.jsx'
import Auth from './containers/Auth.jsx'
import React from 'react'
import Route from './containers/Route.jsx'

import {
  BrowserRouter as Router
} from 'react-router-dom'

export default () =>
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route isPublic exact path='/' component={Auth} redirect='/tasks' />
      <Route isPublic exact path='/login' component={Auth} redirect='/tasks' />
      <Route isPrivate exact path='/tasks' component={App} />
    </div>
  </Router>
