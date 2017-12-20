import React from 'react';

import ChecklistCreate from '../ChecklistCreate'
import ChecklistItem from '../ChecklistItem'
import ChecklistCreateModal from '../ChecklistCreateModal'

import { Menu } from 'antd'
import { Icon } from 'antd'
import { Affix, Button } from 'antd'
import { Modal } from 'antd';

import style from './style.module.css'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.initialColor,
      createModalVisible: false
    };
  }

  showCreateModal = () => {
    this.setState({
      createModalVisible: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      createModalVisible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      createModalVisible: false,
    });
  }

  render() {
    const lists = this.props.lists.byId

    const items = Object.keys(lists).map(k => {
      const list = lists[k]

      return (
        <Menu.Item
          key={lists.id}
          onClick={(e) => this.props.onListChange(e, list.id)}
        >
          <Icon type='bars' />
          <span>{list.name}</span>
          <Affix
            offsetBottom={0}
            style={{ position: 'absolute', top: 0, right: '5px'}}
          >
            <a onClick={() => this.props.onDelete(list.id)} >
              <Icon type='edit' />
            </a>
            <a onClick={() => this.props.onDelete(list.id)} >
              <Icon type='delete' />
            </a>
          </Affix>
        </Menu.Item>
      )
    })

    return (
      <Menu
        theme='dark'
        defaultSelectedKeys={['1']}
        mode='inline'
      >
        {items}
        <Menu.Item
          key='bring-me-some-champagne'
          onClick={this.showCreateModal}
        >
          <a onClick={this.showCreateModal} >
            <Icon type='plus' />
            <strong>Create New List</strong>
          </a>
          <ChecklistCreateModal
            title='Create New List'
            visible={this.state.createModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            onKeyPress={this.props.onCreate}
            onChange={this.props.onChange}
          />
        </Menu.Item>
      </Menu>
    )
  }
}
