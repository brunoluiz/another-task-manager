import firebase from 'firebase'
import * as types from './types'
import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'

const provider = new firebase.auth.GoogleAuthProvider()

export function* auth () {
  try {
    const { user } = yield firebase.auth().signInWithPopup(provider)
    const data = {
      name: user.displayName,
      email: user.email,
      pic: user.photoURL,
      id: user.uid
    }

    yield put({ type: types.AUTH_SUCCESS, data })
  } catch (e) {
    yield put({ type: types.AUTH_FAILURE })
  }
}

export const watchers = [
  takeEvery(types.AUTH, auth)
]
