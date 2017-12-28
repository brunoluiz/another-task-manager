import * as types from './types'
import { fromJS } from 'immutable'
import { types as listsTypes } from '../lists'

const initial = fromJS({
  activeList: null,
  updatableTask: null,
  collapsedMenu: false,
  modal: {
    createList: { visible: false },
    updateList: { id: null, visible: false }
  }
})

export default (state = initial, action) => {
  switch (action.type) {
    case types.TOGGLE_MENUBAR:
      const collapsed = state.get('collapsedMenu')
      return state.set('collapsedMenu', !collapsed)
    case types.SHOW_CREATE_MODAL:
      return state
        .setIn(['modal', 'createList', 'visible'], true)
    case types.SHOW_UPDATE_MODAL:
      return state
        .setIn(['modal', 'updateList', 'visible'], true)
        .setIn(['modal', 'updateList', 'id'], action.id)
    case types.HIDE_MODAL:
      return state
        .setIn(['modal', 'createList', 'visible'], false)
        .setIn(['modal', 'updateList', 'visible'], false)
    case types.UPDATE_ACTIVELIST:
      return state
        .set('activeList', action.id)
    case types.SET_UPDATABLE_TASK:
      return state
        .set('updatableTask', action.id)
    case listsTypes.CHECKLIST_CREATE:
      return state.set('activeList', action.id)
    case listsTypes.CHECKLIST_DELETE:
      return (action.id === state.get('activeList'))
        ? state.set('activeList', null)
        : state
    default:
      return state
  }
}
