import uuid from 'uuid/v4'
import firebase from 'firebase'
import 'firebase/firestore'

const db = firebase.firestore()

export const destroy = (id) =>
  db.collection('users')
    .doc(id)
    .delete()
    .catch(console.log)

export const find = (id) =>
  db.collection('users')
    .doc(id)
    .get()
    .then((doc) => (doc.exists) ? doc.data() : null)
    .catch((e) => {
      console.log(e)
      return null
    })

export const save = (dataIn) => {
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

