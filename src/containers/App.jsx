import AppLayout from '../components/AppLayout'
import React from 'react'
import { actions as ui } from '../modules/ui'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  isLoading: state.ui.get('isLoading')
})

export default connect(
  mapStateToProps
)(AppLayout)
