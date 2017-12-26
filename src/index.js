import './index.css'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
// import registerServiceWorker from './registerServiceWorker'
import App from './containers/App.jsx'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// registerServiceWorker()
