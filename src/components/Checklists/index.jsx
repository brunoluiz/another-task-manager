// @flow

import React from 'react'

import ChecklistList from './ChecklistList'
import UserInfo from '../../containers/UserInfo'
import style from './style.module.css'
import { Layout } from 'antd'

const { Sider } = Layout

export default (props : Object) : Sider<Object> => (
  <Sider
    breakpoint='xs'
    className={style.sider}
    collapsed={props.collapsed}
    collapsedWidth={0}
    collapsible
    trigger={null}
    width={300}
  >
    <UserInfo />
    <ChecklistList {...props} />
  </Sider>
)
