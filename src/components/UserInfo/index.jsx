// @flow

import React from 'react'
import { Icon } from 'antd'

import style from './style.module.css'

type Props = {
  email: string,
  onSignOut: Function
}

export default ({
  email,
  onSignOut,
} : Props) =>
  <div className={style.user}>
    <span>{email}</span>
    <Icon
      className={style.action}
      type='poweroff'
      onClick={onSignOut}
    />
  </div>

