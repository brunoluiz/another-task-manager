// @flow

import React from 'react'

import TaskCreate from '../TaskCreate'
import TaskItem from '../TaskItem'
import { List } from 'antd'

import style from './style.module.css'

type Props = {
  tasks: Object,
  onCreate: (e : SyntheticTouchEvent<>, listId : string, user : string) => mixed,
  listId: string,
  user: string,
  props: mixed
}

export default ({
  tasks,
  onCreate,
  listId,
  user,
  ...props
} : Props) => {
  const items = tasks.map(task => (
    <TaskItem
      key={task.id}
      {...task}
      {...props}
    />
  ))

  const createTask = (
    <TaskCreate
      key='create-task'
      onCreate={onCreate}
      listId={listId}
      user={user}
    />
  )

  return (
    <List
      className={style.list}
      itemLayout='horizontal'
    >
      <div style={{ minHeight: '101%' }}>
        {createTask}
        {items}
      </div>
    </List>
  )
}
