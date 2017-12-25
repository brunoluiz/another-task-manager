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

const itemText = (props) => props.done
  ? (
    <del>{ props.value }</del>
  )
  : (
    <span>{ props.value }</span>
  )


export default (props) => (
  <List.Item
    key={props.id}
    actions={[
      deleteAction(props)
    ]}
    className={style.item}
  >
    <div className={style.centerized} >
      <Checkbox
        checked={props.done}
        onChange={props.onToogle}
        type="checkbox"
        className={style.checkbox}
        value={props.id}
      />
      { itemText(props) }
    </div>
  </List.Item>
)

