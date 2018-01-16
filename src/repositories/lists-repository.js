// @flow

import uuid from 'uuid/v4'
import { db } from '../firebase'
import tasksRepository from './tasks-repository'

export const destroy = async (id : string) => {
  const tasks = await tasksRepository.findByList(id)

  const batch = db.batch()

  tasks.forEach(task => {
    const ref = db.collection('tasks').doc(task.id)
    batch.delete(ref)
  })

  const list = db.collection('lists').doc(id)
  batch.delete(list)

  return batch.commit()
}

export const findByUser = (userId : string) =>
  db.collection('lists')
    .where('user', '==', userId)
    .get()
    .then(res => res.docs.map(item => item.data()))

export const find = (id : string) =>
  db.collection('lists')
    .doc(id)
    .get()
    .then((doc) => (doc.exists) ? doc.data() : null)

export const save = (dataIn : Object) => {
  const data = dataIn.id
    ? Object.assign({}, dataIn)
    : Object.assign({}, dataIn, { id: uuid() })

  return db.collection('lists')
    .doc(data.id)
    .set(data, { merge: true })
    .then(() => data)
}

export default {
  destroy,
  find,
  findByUser,
  save
}
