// @flow

const namespace = 'app/ui'
const define = (str : string) => `${namespace}/${str}`

export const HIDE_MODAL = define('HIDE_MODAL')
export const LOAD = define('LOAD')
export const LOAD_FAILURE = define('LOAD_FAILURE')
export const LOAD_SUCCESS = define('LOAD_SUCCESS')
export const SET_UPDATABLE_TASK = define('SET_UPDATABLE_TASK')
export const SHOW_CREATE_MODAL = define('SHOW_CREATE_MODAL')
export const SHOW_UPDATE_MODAL = define('SHOW_UPDATE_MODAL')
export const TOGGLE_MENUBAR = define('CHANGE_ACTIVELIST')
export const UPDATE_ACTIVELIST = define('UPDATE_ACTIVELIST')
