// @flow

const namespace = 'app/auth'
const define = (str : string) => `${namespace}/${str}`

export const AUTH = define('AUTH')
export const AUTH_SUCCESS = define('AUTH_SUCCESS')
export const AUTH_FAILURE = define('AUTH_FAILURE')
export const SIGNOUT = define('SIGNOUT')
export const SIGNOUT_SUCCESS = define('SIGNOUT_SUCCESS')
export const SIGNOUT_FAILURE = define('SIGNOUT_FAILURE')
