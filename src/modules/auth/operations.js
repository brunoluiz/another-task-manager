import firebase from 'firebase'
import users from '../../repositories/users-repository'
import * as types from './types'
import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'

const provider = new firebase.auth.GoogleAuthProvider()

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
  } catch (e) {
    yield put({ type: types.AUTH_FAILURE })
  }
}

export const watchers = [
  takeEvery(types.AUTH, auth)
]
