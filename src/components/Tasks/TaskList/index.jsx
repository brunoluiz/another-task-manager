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
  )).concat(<TaskCreate
    key='bring-me-some-champagne'
    onCreate={props.onCreate}
  />)

  return <List
    className={`${props.className} ${style.list}`}
    header={<h3>To-do</h3>}
    itemLayout='horizontal'
  >{items}</List>
}

