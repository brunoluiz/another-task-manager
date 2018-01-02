import { actions as ui } from './'
import { put } from 'redux-saga/effects'

export function * notifyLoadSuccess () {
  yield put(ui.doNotifyLoadSuccess())
}

export function * notifyLoad () {
  yield put(ui.doLoad())
}
