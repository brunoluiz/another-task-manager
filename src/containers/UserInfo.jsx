// @flow

import { actions as auth } from '../modules/auth'
import UserInfo from '../components/UserInfo'
import { connect } from 'react-redux'

const mapStateToProps = (state : Object) => ({
  email: state.auth.getIn(['user', 'email'])
})

const mapDispatchToProps = (dispatch : Function) => ({
  onSignOut: () => dispatch(auth.doSignout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)
