import * as type from './constants'

export const create = data => {
  return {
    type: type.CHECKLIST_CREATE,
    data
  }
}

export const destroy = data => {
  return {
    type: type.CHECKLIST_DELETE,
    data
  }
}

export const update = data => {
  return {
    type: type.CHECKLIST_UPDATE,
    data
  }
}
