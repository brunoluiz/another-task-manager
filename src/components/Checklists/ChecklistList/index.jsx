import React from 'react';

import ChecklistCreateModal from '../ChecklistCreateModal'
import {
  Affix,
  Icon,
  Menu,
} from 'antd'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  handleCancel = (e) => {
    this.setState({ visible: false })
  }

  handleClick = ({ item, key, keyPath }) => {
    if (key === 'create-list') {
      return this.showCreateModal()
    }

    this.props.onListChange(key)
  }

  handleCreate = (e) => {
    e.preventDefault()

    this.form.validateFields((err, values) => {
      if (err) return

      this.form.resetFields()
      this.setState({ visible: false })
      this.props.onCreate(values.name)
    })
  }

  saveFormRef = (form) => {
    this.form = form
  }

  showCreateModal = () => {
    this.setState({ visible: true })
  }

  render() {
    const lists = this.props.lists.byId
    const items = Object.keys(lists)
      .map(id =>
      <Menu.Item key={id}>
        <Icon type='bars' />
        <span>{lists[id].name}</span>
        <Affix
          offsetBottom={0}
          style={{ position: 'absolute', top: 0, right: '5px'}}
        >
          <a onClick={() => this.props.onDelete(id)} >
            <Icon type='edit' />
          </a>
          <a onClick={() => this.props.onDelete(id)} >
            <Icon type='delete' />
          </a>
        </Affix>
      </Menu.Item>
    )

    const createButton = (
      <Menu.Item key='create-list'>
        <Icon type='plus' />
        <strong>Create New List</strong>
        <ChecklistCreateModal
          onCancel={this.handleCancel}
          onOk={this.handleCreate}
          ref={this.saveFormRef}
          visible={this.state.visible}
        />
      </Menu.Item>
    )

    return (
      <Menu
        theme='dark'
        defaultSelectedKeys={[this.props.lists.active]}
        mode='inline'
        onClick={this.handleClick}
      >
        {items}
        {createButton}
      </Menu>
    )
  }
}
