import React from 'react';

import style from './style.module.css'

import {
  Checkbox,
  Icon,
  Input,
  List
} from 'antd'

const deleteAction = (props) =>
  <a
    onClick={() => props.onDelete(props.id)}
  ><Icon type='delete'/></a>

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
      />
    </div>
  </List.Item>
)

