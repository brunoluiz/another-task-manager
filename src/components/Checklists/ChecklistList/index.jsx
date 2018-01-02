import React from 'react'

import {
  ChecklistCreateModal,
  ChecklistUpdateModal
} from '../ChecklistModal'
import style from './style.module.css'
import {
  Affix,
  Icon,
  Menu
} from 'antd'

export default (props) => {
  const lists = props.lists.byId
  const items = Object.keys(lists)
    .map(id =>
      <Menu.Item key={id}>
        <Icon type='bars' />
        <span className={style.textWrap}>
          <span>{lists[id].name}</span>
        </span>
        <Affix className={style.actions}>
          <Icon type='edit' onClick={() => props.onEditClick(id)} />
          <Icon type='delete' onClick={() => props.onDelete(id)} />
        </Affix>
      </Menu.Item>
  )

  const createButton = (
    <Menu.Item key='create-list'>
      <Icon type='plus' />
      <strong>Create New List</strong>
    </Menu.Item>
  )

  const createModal = (
    <ChecklistCreateModal
      onHide={props.onHideModal}
      onCreate={(data) => props.onCreate(data, props.user)}
      visible={props.modal.createList.visible}
    />
  )

  const updateModal = (
    <ChecklistUpdateModal
      onHide={props.onHideModal}
      onUpdate={(data) => props.onUpdate(data, props.user)}
      visible={props.modal.updateList.visible}
      data={lists[props.modal.updateList.id]}
    />
  )

  return (
    <Menu
      theme='dark'
      selectedKeys={[props.active]}
      mode='inline'
      onClick={(e) => props.onMenuClick(e)}
    >
      {items}
      {createButton}
      {createModal}
      {updateModal}
    </Menu>
  )
}
