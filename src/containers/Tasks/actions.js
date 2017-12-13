import * as type from './constants'

export const create = data => {
  return {
    type: type.TASK_CREATE,
    data
  }
}

export const destroy = data => {
  return {
    type: type.TASK_DELETE,
    data
  }
}

export const toogle = data => {
  return {
    type: type.TASK_TOOGLE,
    data
  }
}

export const update = data => {
  return {
    type: type.TASK_UPDATE,
    data
  }
}
