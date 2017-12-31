import React from 'react'

import Checklists from '../../containers/Checklists'
import Loading from '../Loading'
import Tasks from '../../containers/Tasks'
import { Layout } from 'antd'

import style from './style.module.css'

export default (props) => props.isLoading
  ? <Loading />
  : <Layout className={style.layout} >
      <Checklists />
      <Tasks className={style.contentLayout} />
    </Layout>
