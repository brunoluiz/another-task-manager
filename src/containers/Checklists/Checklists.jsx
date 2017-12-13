import { connect } from 'react-redux'

import ChecklistList from '../../components/Checklists/ChecklistList'
import * as tasks from './actions'

const mapStateToProps = (state) => ({
  lists: state.lists.toJS()
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: (e) => {
    if (e.key !== 'Enter') return

    const value = e.target.value

    e.target.value = '' // Reset input field value

    return dispatch(tasks.create(value))
  },
  onDelete: (id) => dispatch(
    tasks.destroy(id)
  ),
  onUpdate: (e, id) => dispatch(
    tasks.update({ id, value: e.target.value })
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecklistList)
