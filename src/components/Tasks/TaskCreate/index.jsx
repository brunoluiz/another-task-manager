// @flow

import React from 'react'

import {
  Icon,
  Input,
  List
} from 'antd'

type Props = {
  listId: String,
  onCreate: Function,
  user: String
}

export default ({
  listId,
  onCreate,
  user
}: Props) => (
  <List.Item>
    <Input
      onKeyPress={(e) => onCreate(e, listId, user)}
      placeholder='Add a task'
      prefix={<Icon type='plus' style={{ color: 'rgba(0,0,0,.25)' }} />}
      size='large'
      type='text'
    />
  </List.Item>
)
