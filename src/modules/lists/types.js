const namespace = 'app/lists'
const define = (str) => `${namespace}/${str}`

export const CREATE = define('CREATE')
export const DELETE = define('DELETE')
export const FETCH_FAILED = define('FETCH_FAILED')
export const FETCHED = define('FETCHED')
export const FETCHING = define('FETCHING')
export const INIT = define('INIT')
export const UPDATE = define('UPDATE')
