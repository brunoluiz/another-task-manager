import App from './containers/App.jsx'
import Auth from './components/Auth/index.jsx'
import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default () =>
  <Router>
    <div>
      <Route exact path='/' component={Auth} />
      <Route path='/tasks' component={App} />
    </div>
  </Router>
