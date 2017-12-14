import React from 'react';

import ChecklistCreate from '../ChecklistCreate'
import ChecklistItem from '../ChecklistItem'

export default (props) => {
  const { lists } = props.lists

  const items = Object.keys(lists).map(k => (
    <ChecklistItem
      onDelete={props.onDelete}
      onUpdate={props.onUpdate}
      onListChange={props.onListChange}
      key={k}
      {...lists[k]}
    />
  )).concat(<ChecklistCreate
    key='bring-me-some-champagne'
    onCreate={props.onCreate}
  />)

  return <ul>{items}</ul>
}
