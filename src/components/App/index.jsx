import React from 'react'

import Checklists from '../../containers/Checklists'
import Tasks from '../../containers/Tasks'
import { Layout } from 'antd'

import style from './style.module.css'

export default () =>
  <Layout className={style.layout} >
    <Checklists />
    <Tasks className={style.contentLayout} />
  </Layout>
