import React from 'react';

import style from './style.module.css'

import {
  Checkbox,
  Icon,
  Input,
  List
} from 'antd'

const deleteAction = (props) =>
  <Icon
    onClick={() => props.onDelete(props.id)}
    type='delete'
  />

export default (props) => (
  <List.Item
    key={props.id}
    actions={[
      deleteAction(props)
    ]}
    className='task-list-item'
  >
    <div className={style.centerized} >
      <Checkbox
        checked={props.done}
        onChange={props.onToogle}
        type="checkbox"
        className={style.checkbox}
        value={props.id}
      />
      <Input
        onChange={(e) => props.onUpdate(e, props.id)}
        value={props.value}
        disabled={props.done}
      />
    </div>
  </List.Item>
)

