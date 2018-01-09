import {
  actions as tasks,
  selectors as tasksSelectors
} from '../modules/tasks'
import { actions as ui } from '../modules/ui'
import Tasks from '../components/Tasks'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const listId = state.ui.get('activeList')
  const updatableTask = state.ui.get('updatableTask')
  const tasks = state.tasks.get('byId')
  const taskIds = state.tasks.get('allIds')
  const user = state.auth.getIn(['user', 'id'])

  const list = state.lists
      .getIn(['byId', listId])

  const collapsed = state.ui.get('collapsedMenu')

  return {
    tasks: tasksSelectors.getTasksByList(listId, state.tasks),
    listId,
    list: list ? list.toJS() : null,
    collapsed,
    updatableTask,
    user
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  onCreate: (e, listId, user) => {
    if (e.key !== 'Enter') return

    const value = e.target.value

    e.target.value = '' // Reset input field value

    return dispatch(tasks.doCreate({
      id: uuid(),
      listId,
      value,
      done: false,
      user
    }))
  },
  onDelete: (id) => dispatch(
    tasks.doDelete(id)
  ),
  onUpdate: (e, id, user) => (e.key === 'Enter')
    ? dispatch(tasks.doUpdateAsync({ id, value: e.target.value, user }))
    : dispatch(tasks.doUpdate({ id, value: e.target.value, user })),
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
