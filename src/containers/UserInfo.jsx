import { actions as ui } from '../modules/ui'
import UserInfo from '../components/UserInfo'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  email: state.auth.getIn(['user', 'email'])
})

const mapDispatchToProps = (dispatch) => ({
  onSignOut: () => console.log('signout')
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)
