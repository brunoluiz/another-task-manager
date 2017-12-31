import Auth from '../components/Auth'
import { actions as auth } from '../modules/auth'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  const isLoggedIn = state.auth.get('isLoggedIn')
  const isLoading = state.ui.get('isLoading')

  return {
    isLoggedIn,
    isLoading
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAuth: () => dispatch(auth.doAuth())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth))
