import React from 'react';

import { Button } from 'antd'
import { Icon } from 'antd'
import { Input } from 'antd'
import { List } from 'antd'

import style from './style.module.css'

const isUpdatable = (props) =>
  (props.lists.updatable === props.id)

const textComponent = (props) => isUpdatable(props)
   ? <Input
      className={style.full}
      onChange={(e) => props.onUpdate(e, props.id)}
      onKeyPress={(e) => props.onUpdateSave(e)}
      type="text"
      value={ props.name }
    />
  : <a
      href='#'
      className={style.full}
      onClick={(e) => props.onListChange(e, props.id)}
    >{ props.name }</a>

const buttonComponent = (props) => isUpdatable(props)
  ? <a
      onClick={() => props.onUpdatable(null)}
    ><Icon type='check'/></a>
  : <a
      onClick={() => props.onUpdatable(props.id)}
    ><Icon type='edit'/></a>

export default (props) => {
  return (
    <List.Item
      itemLayout='horizontal'
      actions={[
        buttonComponent(props),
        <a
          onClick={() => props.onDelete(props.id)}
        ><Icon type='delete' /></a>
      ]}
    >
      { textComponent(props) }
    </List.Item>
  )
}


