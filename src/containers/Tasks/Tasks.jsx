import { connect } from 'react-redux'

import TaskList from '../../components/Tasks/TaskList'
import * as tasks from './actions'

const mapStateToProps = (state) => {
  const { active, tasks } = state.tasks.toJS()

  return {
    tasks: tasks[active]
  }
}

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
  ),
  onToogle: (e) => dispatch(
    tasks.toogle(e.target.value)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
