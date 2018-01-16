// @flow

import React from 'react'

import style from './style.module.css'
import TaskList from './TaskList'
import NoListSelected from './NoListSelected'
import {
  Icon,
  Layout
} from 'antd'

const {
  Content,
  Header
} = Layout

const TasksLayout = (props : Object) => (
  <Layout>
    <Header className={style.header}>
      <Icon
        className={style.trigger}
        type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={props.onCollapse}
      />
      <strong>{ props.list ? props.list.name : '' }</strong>
    </Header>
    <Content className={style.contentLayout} >
      { props.children }
    </Content>
  </Layout>
)

export default (props : Object) => {
  const content = props.list
    ? <TaskList {...props} />
    : <NoListSelected/>
  return (
    <TasksLayout {...props}>
      { content }
    </TasksLayout>
  )
}
