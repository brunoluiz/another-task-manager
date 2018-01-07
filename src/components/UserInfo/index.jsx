import React from 'react'
import { Icon } from 'antd'

import style from './style.module.css'

export default (props) =>
  <div className={style.user}>
    <span>{ props.email }</span>
    <Icon
      className={style.action}
      type='poweroff'
      onClick={props.onSignOut}
    />
  </div>

