const namespace = 'app/tasks'
const define = (str) => `${namespace}/${str}`

export const TOOGLE = define('TOOGLE')
export const CREATE = define('CREATE')
export const DELETE = define('DELETE')
export const UPDATE = define('UPDATE')
export const FETCHING = define('FETCHING')
export const FETCHED = define('FETCHED')
export const FETCH_FAILED = define('FETCH_FAILED')
