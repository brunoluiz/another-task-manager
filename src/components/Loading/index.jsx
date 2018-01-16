// @flow

import React from 'react'

import { Spin } from 'antd'

import style from './style.module.css'

export default () =>
  <div className={style.loading}>
    <Spin size='large' />
  </div>
