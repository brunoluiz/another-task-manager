import { connect } from 'react-redux'

import Tasks from '../components/Tasks'
import * as tasks from '../modules/tasks'

const mapStateToProps = (state) => {
  const listId = state.lists.get('active')
  const tasks = state.tasks.get('byId')
  const taskIds = state.tasks.get('allIds')

  const uiActiveTasks = tasks
    .reduce((acc, task) => {
      // Filter tasks which are not on the actual list
      if( task.get('listId') !== listId ) return acc

      // Sort the tasks based on allIds
      const taskId = task.get('id')
      const index = taskIds.indexOf(taskId)
      acc[index] = task.toJS()

      // Maybe a bottleneck will be the toJS()
      return acc
    }, [])

  return {
    tasks: uiActiveTasks,
    listId
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  onCreate: (e, listId) => {
    if (e.key !== 'Enter') return

    const value = e.target.value

    e.target.value = '' // Reset input field value

    return dispatch(tasks.doCreate({
      value,
      listId
    }))
  },
  onDelete: (id) => dispatch(
    tasks.doDelete(id)
  ),
  onUpdate: (e, id) => dispatch(
    tasks.doUpdate({
      id,
      value: e.target.value
    })
  ),
  onToogle: (e) => dispatch(
    tasks.doToogle(e.target.value)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)
