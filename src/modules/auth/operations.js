import firebase from 'firebase'
import users from '../../repositories/users-repository'
import { operations as lists } from '../lists'
import { operations as tasks } from '../tasks'
import { actions as ui } from '../ui'
import * as types from './types'
import {
  all,
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

export function* save ({ user }) {
  const data = {
    email: user.email,
    id: user.uid,
    name: user.displayName,
    photoURL: user.photoURL
  }

  yield put({ type: types.AUTH_SUCCESS, data })

  return data
}

export function* isLoggedIn () {
  const user = yield firebaseAuth()

  if (!user) return

  yield call(save, { user })

  const data = {
    data: { user: user.uid }
  }

  yield all([
    call(lists.fetchByUser, data),
    call(tasks.fetchByUser, data)
  ])

  yield put(ui.doNotifyLoadSuccess())
}

export function* auth () {
  try {
    const {
      additionalUserInfo,
      user
    } = yield firebase.auth().signInWithPopup(provider)

    const data = yield call(save, user)

    if (additionalUserInfo.isNewUser) {
      yield users.save(data)
    }

  } catch (e) {
    yield put({ type: types.AUTH_FAILURE })
  }
}

export const watchers = [
  takeEvery(types.AUTH, auth)
]
