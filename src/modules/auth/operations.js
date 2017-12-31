import firebase from 'firebase'
import users from '../../repositories/users-repository'
import * as types from './types'
import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'

const provider = new firebase.auth.GoogleAuthProvider()

const firebaseAuth = () => new Promise((resolve, reject) =>
  firebase.auth().onAuthStateChanged((user, err) =>
    err ? reject(err) : resolve(user)
  )
)

export function* isLoggedIn () {
  const user = yield firebaseAuth()

  if (user) {
    yield put({ type: types.AUTH_SUCCESS, data: user })
  }
}

export function* auth () {
  try {
    const {
      additionalUserInfo,
      user
    } = yield firebase.auth().signInWithPopup(provider)

    const data = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      id: user.uid,
      profile: additionalUserInfo.profile
    }

    yield put({ type: types.AUTH_SUCCESS, data })

    if (additionalUserInfo.isNewUser) {
      yield users.save(data)
    }

  console.log(firebase.auth().currentUser)
  } catch (e) {
    yield put({ type: types.AUTH_FAILURE })
  }
}

export const watchers = [
  takeEvery(types.AUTH, auth)
]
