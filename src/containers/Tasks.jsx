import { connect } from 'react-redux'

import TaskList from '../components/Tasks/TaskList'
import * as tasks from '../modules/tasks'

const mapStateToProps = (state) => {
  const tasks = state.tasks.toJS()

  // TODO: This seems nasty...
  const uiActiveTasks = Object.keys(tasks.byId)
    .reduce((acc, id) => {
      if( tasks.byId[id].listId !== tasks.active ) return acc

      const index = tasks.allIds.indexOf(id)
      acc[index] = tasks.byId[id]
      return acc
    }, [])

  return {
    tasks: uiActiveTasks
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
    tasks.doDelete(id)
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
