import React from 'react';

import TaskCreate from '../TaskCreate'
import TaskItem from '../TaskItem'
import { List } from 'antd';

import style from './style.module.css'

export default (props) => {
  const { tasks } = props

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
      onCreate={props.onCreate}
    />
  )

  return (
    <List
      className={`${props.className} ${style.list}`}
      itemLayout='horizontal'
    >
      {createTask}
      {items}
    </List>
  )
}

