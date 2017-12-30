import Auth from '../components/Auth'
import { actions as auth } from '../modules/auth'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onAuth: () => dispatch(auth.doAuth())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
