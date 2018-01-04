import React from 'react'

import { Button, Icon } from 'antd'

import style from './style.module.css'

export default (props) =>
  <div className={style.auth}>
    <div className={style.box}>
      <Icon type='profile' className={style.logo} />
      <h1>ANOTHER TASK MANAGER</h1>
      <ul className={style.buttons}>
        <li>
          <Button
            icon='google'
            onClick={props.onAuth}
            >Login With Google</Button>
        </li>
      </ul>
    </div>
  </div>
