import React from 'react'

import {
  Icon,
  Input,
  List
} from 'antd'

export default (props) => (
  <List.Item>
    <Input
      onChange={props.onChange}
      onKeyPress={(e) => props.onCreate(e, props.listId, props.user)}
      placeholder='Add a task'
      prefix={<Icon type='plus' style={{ color: 'rgba(0,0,0,.25)' }} />}
      size='large'
      type='text'
    />
  </List.Item>
)
