import React from 'react';

import {
  Icon,
  Input,
  List
} from 'antd'

export default (props) => (
  <List.Item>
    <Input
      onKeyPress={props.onCreate}
      onChange={props.onChange}
      placeholder='Add a task'
      prefix={<Icon type='plus' style={{ color: 'rgba(0,0,0,.25)' }} />}
      type="text"
    />
  </List.Item>
)
