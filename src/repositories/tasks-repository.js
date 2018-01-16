// @flow

import uuid from 'uuid/v4'
import { db } from '../firebase'

export const destroy = (id : String) =>
  db.collection('tasks')
    .doc(id)
    .delete()

export const findByUser = (userId : String) =>
  db.collection('tasks')
    .where('user', '==', userId)
    .get()
    .then(res => res.docs.map(item => item.data()))

export const findByList = (listId : String) =>
  db.collection('tasks')
    .where('listId', '==', listId)
    .get()
    .then(res => res.docs.map(item => item.data()))

export const find = (id : String) =>
  db.collection('tasks')
    .doc(id)
    .get()
    .then((doc) => (doc.exists) ? doc.data() : null)

export const save = (dataIn : Object) => {
  const data = dataIn.id
    ? Object.assign({}, dataIn)
    : Object.assign({}, dataIn, { id: uuid() })

  return db.collection('tasks')
    .doc(data.id)
    .set(data, { merge: true })
    .then(() => data)
}

export default {
  destroy,
  find,
  findByUser,
  findByList,
  save
}
