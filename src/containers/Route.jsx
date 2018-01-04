import Route from '../components/Route'
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

export default withRouter(connect(
  mapStateToProps
)(Route))
