import * as types from './types'
import { fromJS } from 'immutable'
import { types as listsTypes } from '../lists'

const initial = fromJS({
  activeList: null,
  updatableTask: null,
  collapsedMenu: false,
  isLoading: true,
  modal: {
    createList: { visible: false },
    updateList: { id: null, visible: false }
  }
})

export default (state = initial, action) => {
  const { data, type } = action

  switch (type) {
    case types.LOADING:
      return state.set('isLoading', true)

    case types.LOADED:
      return state.set('isLoading', false)

    case types.TOGGLE_MENUBAR:
      const collapsed = state.get('collapsedMenu')
      return state.set('collapsedMenu', !collapsed)

    case types.SHOW_CREATE_MODAL:
      return state
        .setIn(['modal', 'createList', 'visible'], true)

    case types.SHOW_UPDATE_MODAL:
      return state
        .setIn(['modal', 'updateList', 'visible'], true)
        .setIn(['modal', 'updateList', 'id'], data.id)

    case types.HIDE_MODAL:
      return state
        .setIn(['modal', 'createList', 'visible'], false)
        .setIn(['modal', 'updateList', 'visible'], false)

    case types.UPDATE_ACTIVELIST:
      return state
        .set('activeList', data.id)

    case types.SET_UPDATABLE_TASK:
      return state
        .set('updatableTask', data.id)

    case listsTypes.CREATE:
      return state.set('activeList', data.id)

    case listsTypes.DELETE:
      return (data.id === state.get('activeList'))
        ? state.set('activeList', null)
        : state

    default:
      return state
  }
}
