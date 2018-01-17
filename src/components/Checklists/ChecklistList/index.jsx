// @flow

import React from 'react'

import {
  ChecklistCreateModal,
  ChecklistUpdateModal
} from '../ChecklistModal'
import {
  Affix,
  Icon,
  Menu
} from 'antd'

import style from './style.module.css'

type Props = {
  active: ?string,
  lists: Object,
  modal: Object,
  onCreate: (data : Object, user : string) => mixed,
  onDelete: (id : string) => mixed,
  onEditClick: (id : string) => mixed,
  onHideModal: (e : SyntheticTouchEvent<>) => mixed,
  onMenuClick: (e : SyntheticTouchEvent<>) => mixed,
  onUpdate: (data : Object, user : string) => mixed,
  user: string
}

export default ({
  active,
  lists,
  modal,
  onCreate,
  onDelete,
  onEditClick,
  onHideModal,
  onMenuClick,
  onUpdate,
  user
} : Props) : Menu<Props>  => {
  const listsCollection = lists.byId
  const items = Object.keys(listsCollection)
    .map(id =>
      <Menu.Item key={id}>
        <Icon type='bars' />
        <span className={style.textWrap}>
          <span>{listsCollection[id].name}</span>
        </span>
        <Affix className={style.actions}>
          <Icon type='edit' onClick={() => onEditClick(id)} />
          <Icon type='delete' onClick={() => onDelete(id)} />
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
      onHide={onHideModal}
      onCreate={(data) => onCreate(data, user)}
      visible={modal.createList.visible}
    />
  )

  const updateModal = (
    <ChecklistUpdateModal
      onHide={onHideModal}
      onUpdate={(data) => onUpdate(data, user)}
      visible={modal.updateList.visible}
      data={lists[modal.updateList.id]}
    />
  )

  return (
    <Menu
      theme='dark'
      selectedKeys={[active]}
      mode='inline'
      onClick={(e) => onMenuClick(e)}
    >
      {items}
      {createButton}
      {createModal}
      {updateModal}
    </Menu>
  )
}
