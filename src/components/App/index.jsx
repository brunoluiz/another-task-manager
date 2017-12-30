import React from 'react'

import Checklists from '../../containers/Checklists'
import style from './style.module.css'
import Tasks from '../../containers/Tasks'
import {
  Layout,
  Spin
} from 'antd'

export default (props) =>
  <Spin spinning={props.isLoading} size='large' >
    <Layout className={style.layout} >
      <Checklists />
      <Tasks className={style.contentLayout} />
    </Layout>
  </Spin>
