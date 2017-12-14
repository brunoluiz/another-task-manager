import React from 'react';

import ChecklistCreate from '../ChecklistCreate'
import ChecklistItem from '../ChecklistItem'

export default (props) => {
  const { lists } = props.lists

  const items = Object.keys(lists).map(k => (
    <ChecklistItem
      key={k}
      {...lists[k]}
      {...props}
    />
  )).concat(<ChecklistCreate
    key='bring-me-some-champagne'
    onCreate={props.onCreate}
  />)

  return <ul>{items}</ul>
}
