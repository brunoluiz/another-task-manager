import React from 'react';

import ChecklistCreate from '../ChecklistCreate'
import ChecklistItem from '../ChecklistItem'

import { List } from 'antd';

import style from './style.module.css'

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

  return <List
    className={style.list}
    header={<h3>Lists</h3>}
    itemLayout='horizontal'
  >{items}</List>
}

