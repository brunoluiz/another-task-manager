import * as checklistsType from '../Checklists/constants'
import * as type from './constants'
import {fromJS} from 'immutable';
import uuid from 'uuid/v4'

const initial = fromJS({
  active: 'x',
  tasks: {
    x: [
      { id: uuid(), value: 'test', done: false },
      { id: uuid(), value: 'hello world', done: true }
    ]
  }
})

const getIndex = (tasks, id) =>
  tasks.findIndex((task) => task.get('id') === id)

export default (state = initial, action) => {
  const active = state.get('active')

  switch(action.type) {
    case type.TASK_CREATE:
      return state.updateIn(['tasks', active], (tasks) => {
        const createdTask = fromJS({
          id: uuid(),
          value: action.data,
          done: false
        })

        return tasks.push(createdTask)
      })

    case type.TASK_DELETE:
      return state.updateIn(['tasks', active], (tasks) => {
        const index = getIndex(tasks, action.data)

        return tasks.delete(index)
      })

    case type.TASK_UPDATE:
      return state.updateIn(['tasks', active], (tasks) => {
        const { value, id } = action.data
        const index = getIndex(tasks, id)

        return tasks.update(index, (task) =>
          task.set('value', value)
        )
      })

    case type.TASK_TOOGLE:
      return state.updateIn(['tasks', active], (tasks) => {
        const id = action.data
        const index = getIndex(tasks, id)

        return tasks.update(index, (task) => {
          const done = task.get('done')
          return task.set('done', !done)
        })
      })

    case checklistsType.CHECKLIST_CHANGE:
      return state.set('active', action.data)

    case checklistsType.CHECKLIST_CREATE:
      return state.updateIn(['tasks'], (tasks) => {
        return tasks.set(action.id, [])
      })

    default:
      return state
  }
}
