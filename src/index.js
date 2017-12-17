import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App.jsx'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

import 'normalize.css'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
