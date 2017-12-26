import React from 'react';

import ChecklistModal from '../ChecklistModal'
import style from './style.module.css'
import {
  Affix,
  Icon,
  Menu,
} from 'antd'

export default class extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.form.validateFields((err, values) => {
      if (err) return

      this.props.onCreate(values.name)
      this.props.onHideModal()
      this.form.resetFields()
    })
  }

  saveFormRef = (form) => {
    this.form = form
  }

  render() {
    const lists = this.props.lists.byId
    const items = Object.keys(lists)
      .map(id =>
      <Menu.Item key={id}>
        <Icon type='bars' />
        <span className={style.textWrap}>
          <span>{lists[id].name}</span>
        </span>
        <Affix className={style.actions}>
          <Icon type='edit' onClick={() => this.props.onDelete(id)}/>
          <Icon type='delete' onClick={() => this.props.onDelete(id)}/>
        </Affix>
      </Menu.Item>
    )

    const createButton = (
      <Menu.Item key='create-list'>
        <Icon type='plus' />
        <strong>Create New List</strong>
      </Menu.Item>
    )

    const modal = (
      <ChecklistModal
        onCancel={this.props.onHideModal}
        onOk={this.handleSubmit}
        ref={this.saveFormRef}
        visible={this.props.showModal}
      />
    )

    return (
      <Menu
        theme='dark'
        selectedKeys={[this.props.active]}
        mode='inline'
        onClick={(e) => this.props.onMenuClick(e)}
      >
        {items}
        {createButton}
        {modal}
      </Menu>
    )
  }
}
