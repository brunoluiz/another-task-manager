import { connect } from 'react-redux'

import TaskList from '../components/Tasks/TaskList'
import * as tasks from '../modules/tasks'

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

    return dispatch(tasks.doCreate(value))
  },
  onDelete: (id) => dispatch(
    tasks.doDestroy(id)
  ),
  onUpdate: (e, id) => dispatch(
    tasks.doUpdate({ id, value: e.target.value })
  ),
  onToogle: (e) => dispatch(
    tasks.doToogle(e.target.value)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
