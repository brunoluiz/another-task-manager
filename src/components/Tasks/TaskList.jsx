import React from 'react';

import TaskCreate from './TaskCreate'
import TaskItem from './TaskItem'

export default (props) => {
  const items = props.tasks.map(task => (
    <TaskItem
      onDelete={props.onDelete}
      onToogle={props.onToogle}
      onUpdate={props.onUpdate}
      key={task.id}
      {...task} 
    />
  )).concat(<TaskCreate 
    key='bring-me-some-champagne'
    onCreate={props.onCreate}
  />)

  return <ul>{items}</ul>
}
