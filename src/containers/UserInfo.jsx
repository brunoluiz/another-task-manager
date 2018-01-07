import { actions as auth } from '../modules/auth'
import UserInfo from '../components/UserInfo'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  email: state.auth.getIn(['user', 'email'])
})

const mapDispatchToProps = (dispatch) => ({
  onSignOut: () => dispatch(auth.doSignout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)
