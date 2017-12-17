import React from 'react';

import ChecklistCreate from '../ChecklistCreate'
import ChecklistItem from '../ChecklistItem'

import style from './ChecklistList.module.css'

export default (props) => {
  const lists = props.lists.byId

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

  return <ul className={props.className} >{items}</ul>
}
