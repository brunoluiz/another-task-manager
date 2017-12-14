import * as type from './constants'
import uuid from 'uuid/v4'

export const create = data => {
  return {
    id: uuid(),
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

export const changeActive = data => {
  return {
    type: type.CHECKLIST_CHANGE,
    data
  }
}
