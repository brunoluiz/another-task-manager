import React from 'react'
import { Icon } from 'antd'

import style from './style.module.css'

export default ({
  email,
  onSignOut,
  ...props
}) =>
  <div className={style.user}>
    <span>{email}</span>
    <Icon
      className={style.action}
      type='poweroff'
      onClick={onSignOut}
    />
  </div>

