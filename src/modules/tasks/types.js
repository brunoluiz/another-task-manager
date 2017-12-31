const namespace = 'app/tasks'
const define = (str) => `${namespace}/${str}`

export const CREATE = define('CREATE')
export const DELETE = define('DELETE')
export const FETCH = define('FETCH')
export const FETCH_FAILURE = define('FETCH_FAILURE')
export const FETCH_SUCCESS = define('FETCH_SUCCESS')
export const INIT = define('INIT')
export const TOOGLE = define('TOOGLE')
export const UPDATE = define('UPDATE')
export const UPDATE_ASYNC = define('UPDATE_ASYNC')
