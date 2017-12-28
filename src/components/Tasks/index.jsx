import React from 'react'

import style from './style.module.css'
import TaskList from './TaskList'
import {
  Icon,
  Layout
} from 'antd'

const {
  Content,
  Header
} = Layout

const TasksLayout = (props) => (
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

export default (props) => {
  const content = props.list
    ? <TaskList {...props} />
    : null
  return (
    <TasksLayout {...props}>
      { content }
    </TasksLayout>
  )
}
