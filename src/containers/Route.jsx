import Route from '../components/Route'
import { actions as auth } from '../modules/auth'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  const isLoggedIn = state.auth.get('isLoggedIn')

  return {
    isLoggedIn
  }
}

export default withRouter(connect(
  mapStateToProps
)(Route))

