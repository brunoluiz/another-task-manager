// @flow

import uuid from 'uuid/v4'
import { db } from '../firebase'

export const destroy = (id : String) =>
  db.collection('users')
    .doc(id)
    .delete()
    .catch(console.log)

export const find = (id : String) =>
  db.collection('users')
    .doc(id)
    .get()
    .then((doc) => (doc.exists) ? doc.data() : null)
    .catch((e) => {
      console.log(e)
      return null
    })

export const save = (dataIn : Object) => {
  const data = dataIn.id
    ? Object.assign({}, dataIn)
    : Object.assign({}, dataIn, { id: uuid() })

  return db.collection('users')
    .doc(data.id)
    .set(data, { merge: true })
    .then(() => data)
    .catch(console.log)
}

export default {
  destroy,
  find,
  save
}
