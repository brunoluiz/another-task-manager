import firebase from 'firebase'
import users from '../../repositories/users-repository'
import { operations as lists } from '../lists'
import { operations as tasks } from '../tasks'
import { operations as ui } from '../ui'
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

export function * save (user) {
  const data = {
    email: user.email,
    id: user.uid,
    name: user.displayName,
    photoURL: user.photoURL
  }

  yield put({ type: types.AUTH_SUCCESS, data })

  return data
}

export function * fetchUserData (user) {
  yield all([
    call(lists.fetchByUser, user),
    call(tasks.fetchByUser, user)
  ])
}

export function * isLoggedIn () {
  yield call(ui.notifyLoad)

  const user = yield firebaseAuth()

  if (!user) {
    yield call(ui.notifyLoadSuccess)
    return
  }

  yield call(save, user)

  yield call(fetchUserData, user.uid)

  yield call(ui.notifyLoadSuccess)
}

export function * auth () {
  try {
    const {
      additionalUserInfo,
      user
    } = yield firebase.auth().signInWithPopup(provider)

    const data = yield call(save, user)

    if (additionalUserInfo.isNewUser) {
      yield users.save(data)
    }

    yield call(fetchUserData, user.uid)

    yield call(ui.notifyLoadSuccess)
  } catch (e) {
    yield put({ type: types.AUTH_FAILURE })
  }
}

export const watchers = [
  takeEvery(types.AUTH, auth)
]
