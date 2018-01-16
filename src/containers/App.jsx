// @flow

import App from '../components/App'
import { connect } from 'react-redux'

const mapStateToProps = (state : Object) => ({
  isLoading: state.ui.get('isLoading')
})

export default connect(
  mapStateToProps
)(App)
