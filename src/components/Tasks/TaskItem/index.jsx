import React from 'react';

import style from './style.module.css'

import {
  Checkbox,
  Icon,
  Input,
  List
} from 'antd'

const deleteAction = (props) => (
  <Icon
    onClick={() => props.onDelete(props.id)}
    type='delete'
  />
)

const itemStyle = (props) => {
  const done = props.done ? style.done : ''
  return `${style.item} ${done}`
}

export default (props) => (
  <List.Item
    key={props.id}
    actions={[
      deleteAction(props)
    ]}
    className={itemStyle(props)}
  >
    <div className={style.centerized} >
      <Checkbox
        checked={props.done}
        onChange={props.onToogle}
        type="checkbox"
        className={style.checkbox}
        value={props.id}
      />
      { props.value }
    </div>
  </List.Item>
)

