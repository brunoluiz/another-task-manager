import * as type from './constants'
import {fromJS} from 'immutable';
import uuid from 'uuid/v4'

const initial = fromJS([
  { id: uuid(), value: 'test', done: false },
  { id: uuid(), value: 'hello world', done: true }
])

const getIndex = (tasks, id) =>
  tasks.findIndex((task) => task.get('id') === id)

export default (state = initial, action) => {
  switch(action.type) {
    case type.TASK_CREATE:
      return state.push(fromJS({
        id: uuid(),
        value: action.data,
        done: false
      }))

    case type.TASK_DELETE:
      return state.delete(getIndex(state, action.data))

    case type.TASK_UPDATE:
      const { value, id } = action.data

      return state.update(
        getIndex(state, id),
        (task) => task.set('value', value)
      )

    case type.TASK_TOOGLE:
      return state.update(
        getIndex(state, action.data),
        (task) => {
          const done = task.get('done')
          return task.set('done', !done)
        }
      )
    default:
      return state
  }
}
