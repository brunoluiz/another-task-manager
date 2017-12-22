import React from 'react';

import ChecklistModal from '../ChecklistModal'
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
          <Icon
            type='edit'
            onClick={() => this.props.onDelete(id)}
          />
          <Icon
            type='delete'
            onClick={() => this.props.onDelete(id)}
          />
        </Affix>
      </Menu.Item>
    )

    const createButton = (
      <Menu.Item key='create-list'>
        <Icon type='plus' />
        <strong>Create New List</strong>
        <ChecklistModal
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
