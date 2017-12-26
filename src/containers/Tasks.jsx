import * as tasks from '../modules/tasks'
import * as ui from '../modules/ui'
import Tasks from '../components/Tasks'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const listId = state.ui.get('activeList')
  const updatableTask = state.ui.get('updatableTask')
  const tasks = state.tasks.get('byId')
  const taskIds = state.tasks.get('allIds')

  const list = state.lists
      .getIn(['byId', listId])

  const sortedTasks = taskIds
    .map(id => tasks.get(id))

  const uiActiveTasks = sortedTasks
    .reduce((acc, task) => {
      // Filter tasks which are not on the actual list
      if( task.get('listId') !== listId ) return acc

      // Maybe a bottleneck will be the toJS()
      return task.get('done')
        ? [...acc, task.toJS()]
        : [task.toJS(), ...acc]
    }, [])

  const collapsed = state.ui.get('collapsedMenu')

  return {
    tasks: uiActiveTasks,
    listId,
    list: list ? list.toJS() : null,
    collapsed,
    updatableTask
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  onCreate: (e, listId) => {
    if (e.key !== 'Enter') return

    const value = e.target.value

    e.target.value = '' // Reset input field value

    return dispatch(tasks.doCreate({
      value,
      listId,
      id: uuid()
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
  ),
  onCollapse: (e) => dispatch(
    ui.doToggleMenubar()
  ),
  onSetUpdatable: (id) => dispatch(
    ui.doSetUpdatableTask(id)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)
