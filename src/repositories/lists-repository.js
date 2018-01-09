import uuid from 'uuid/v4'
import firebase from 'firebase'
import 'firebase/firestore'
import tasksRepository from './tasks-repository'

const db = firebase.firestore()

export const destroy = async (id) => {
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

export const findByUser = (userId) =>
  db.collection('lists')
    .where('user', '==', userId)
    .get()
    .then(res => res.docs.map(item => item.data()))

export const find = (id) =>
  db.collection('lists')
    .doc(id)
    .get()
    .then((doc) => (doc.exists) ? doc.data() : null)

export const save = (dataIn) => {
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
