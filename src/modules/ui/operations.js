import { actions as ui } from './'
import {
  put
} from 'redux-saga/effects'

export function* setLoaded () {
  yield put(ui.doNotifyLoadSuccess())
}
