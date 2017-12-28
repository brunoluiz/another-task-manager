import App from './containers/App.jsx'
import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default (
  <Router>
    <div>
      <Route exact path='/' component={App} />
    </div>
  </Router>
)
