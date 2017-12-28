import React from 'react'

import style from './style.module.css'

import {
  Checkbox,
  Icon,
  Input,
  List
} from 'antd'

const updateAction = (props) => props.updatableTask === props.id
  ? (
    <Icon onClick={() => props.onSetUpdatable(null)} type='check' />
  ) : (
    <Icon onClick={() => props.onSetUpdatable(props.id)} type='edit' />
  )

const deleteAction = (props) => (
  <Icon onClick={() => props.onDelete(props.id)} type='delete' />
)

const itemStyle = (props) => {
  const done = props.done ? style.done : ''
  return `${style.item} ${done}`
}

const checkbox = (props) => props.updatableTask === props.id
  ? (
    <Checkbox
      checked={props.done}
      className={style.checkbox}
      disabled
    />
  ) : (
    <Checkbox
      checked={props.done}
      onChange={props.onToogle}
      className={style.checkbox}
      value={props.id}
    />
  )

const textValue = (props) => props.updatableTask === props.id
  ? (
    <Input
      value={props.value}
      onChange={(e) => props.onUpdate(e, props.id)}
      onKeyPress={(e) => props.onUpdate(e, props.id)}
    />
  ) : (
    <span className={style.text}>{ props.value }</span>
  )

export default (props) => (
  <List.Item
    key={props.id}
    actions={[
      updateAction(props),
      deleteAction(props)
    ]}
    className={itemStyle(props)}
  >
    <div className={style.centerized} >
      { checkbox(props) }
      { textValue(props) }
    </div>
  </List.Item>
)
