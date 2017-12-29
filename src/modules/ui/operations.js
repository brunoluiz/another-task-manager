import * as types from './types'
import {
  put
} from 'redux-saga/effects'

export function* setLoaded () {
  yield put({
    type: types.LOADED
  })
}
