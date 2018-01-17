import React from 'react'

import { Button, Icon } from 'antd'

import style from './style.module.css'

type Props = {
  onAuth: () => mixed
}

export default ({
  onAuth
} : Props) : React.Component<Props> => (
  <div className={style.auth}>
    <div className={style.box}>
      <Icon type='profile' className={style.logo} />
      <h1>ANOTHER TASK MANAGER</h1>
      <ul className={style.buttons}>
        <li>
          <Button
            icon='google'
            onClick={onAuth}
            >Login With Google</Button>
        </li>
      </ul>
    </div>
  </div>
)
