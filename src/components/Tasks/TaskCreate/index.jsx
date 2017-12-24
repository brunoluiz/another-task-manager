import React from 'react';

import {
  Icon,
  Input,
  List
} from 'antd'

const createAction = (props) =>
  <Icon
    type='plus'
  />

export default (props) => (
  <List.Item
    actions={[
      createAction(props)
    ]}
  >
    <Input
      onChange={props.onChange}
      onKeyPress={(e) => props.onCreate(e, props.listId)}
      placeholder='Add a task'
      prefix={<Icon type='plus' style={{ color: 'rgba(0,0,0,.25)' }} />}
      size='large'
      type='text'
    />
  </List.Item>
)
