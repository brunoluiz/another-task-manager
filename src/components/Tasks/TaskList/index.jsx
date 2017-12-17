import React from 'react';

import TaskCreate from '../TaskCreate'
import TaskItem from '../TaskItem'

import style from './style.module.css'

export default (props) => {
  const { tasks } = props

  const items = Object.keys(tasks).map(k => (
    <TaskItem
      key={k}
      {...tasks[k]}
      {...props}
    />
  )).concat(<TaskCreate
    key='bring-me-some-champagne'
    onCreate={props.onCreate}
  />)

  return <ul className={props.className}>{items}</ul>
}

