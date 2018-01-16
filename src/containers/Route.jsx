// @flow

import Route from '../components/Route'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state : Object) => ({
  isLoggedIn: state.auth.get('isLoggedIn'),
  isLoading: state.ui.get('isLoading')
})

export default withRouter(connect(
  mapStateToProps
)(Route))
